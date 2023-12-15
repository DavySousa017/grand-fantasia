const { Pool } = require("pg");
const crypto = require("crypto");
const fs = require("fs");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("../config/smtp");

// Definindo o transporter do Nodemailer
const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Definindo a rota do banco {gf_ls}
const poolLS = new Pool({
  user: "user", // exemplo: postgres
  host: "databaseAddress", // exemplo: 83.51.136.168
  database: "gf_ls",
  password: "password", // senha do banco de dados
  port: 5432,
});

// Definindo a rota do banco {gf_ms}
const poolMS = new Pool({
  user: "user", // exemplo: postgres
  host: "databaseAddress", // exemplo: 83.51.136.168
  database: "gf_ms",
  password: "password", // senha do banco de dados
  port: 5432,
});

// Defininindo a rota do banco {panding_accounts}
const poolPA = new Pool({
  user: "user", // exemplo: postgres
  host: "databaseAddress", // exemplo: 83.51.136.168
  database: "pending_accounts",
  password: "password", // senha do banco de dados
  port: 5432,
});

// Função para cadastrar um novo usuário
const createUser = async (req, res) => {
  try {
    // const { username, password, email, code } = req.body;
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }

    const validateUsername = (value) => {
      regex = /^[a-zA-Z0-9]*$/;
      return regex.test(value);
    };

    const validateEmail = (value) => {
      const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(value);
    };

    const validatePassword = (value) => {
      const regex = /^[a-zA-Z0-9*#@]*$/;
      return regex.test(value);
    };

    if (
      username.length < 8 ||
      username.length > 32 ||
      !validateUsername(username)
    ) {
      return res
        .status(400)
        .json({ error: "Insira um nome de usuário válido." });
    }
    if (
      password.length < 8 ||
      password.length > 32 ||
      !validatePassword(password)
    ) {
      return res.status(400).json({ error: "Insira uma senha válida." });
    }
    if (!validateEmail(email)) {
      return res
        .status(400)
        .json({ error: "Insira um endereço de email válido" });
    }

    // Função para verificar se USERNAME já existe no banco {gf_ls}
    const userExistsQueryLS =
      "SELECT 1 FROM accounts WHERE realname = $1 LIMIT 1";
    const { rows: userExistsLS } = await poolLS.query(userExistsQueryLS, [
      username,
    ]);

    // Função para verificar se USERNAME já existe no banco {gf_ms}
    const userExistsQueryMS = "SELECT 1 FROM tb_user WHERE mid = $1 LIMIT 1";
    const { rows: userExistsMS } = await poolMS.query(userExistsQueryMS, [
      username,
    ]);

    // Função para verificar se USERNAME já existe no banco {gf_pa}
    const userExistsQueryPA =
      "SELECT 1 FROM pending WHERE username = $1 LIMIT 1";
    const { rows: userExistsPA } = await poolPA.query(userExistsQueryPA, [
      username,
    ]);

    // Função para verificar se o EMAIL já existe no banco {gf_ls}
    const emailExistsQueryLS =
      "SELECT 1 from accounts WHERE email = $1 LIMIT 1";
    const { rows: emailExistsLS } = await poolLS.query(emailExistsQueryLS, [
      email,
    ]);

    // Função para verificar se o EMAIL já existe no banco {gf_pa}
    const emailExistsQueryPA = "SELECT 1 from pending WHERE email = $1 LIMIT 1";
    const { rows: emailExistsPA } = await poolPA.query(emailExistsQueryPA, [
      email,
    ]);

    // Verificando se o USERNAME já existe no banco {gf_ls}
    if (
      userExistsLS.length > 0 ||
      userExistsMS.length > 0 ||
      userExistsPA.length > 0
    ) {
      return res
        .status(403)
        .json({ error: "Nome de usuário já está sendo utilizado." });
    }

    // Verificando se o EMAIL já existe no banco {gf_ls}
    if (emailExistsLS.length > 0 || emailExistsPA.length > 0) {
      return res
        .status(403)
        .json({ error: "Esse endereço de email já está sendo utilizado." });
    }

    const passwordmd5 = crypto.createHash("md5").update(password).digest("hex");

    // Função para gerar codigo de validação
    const generateCode = () => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      let code = "";

      for (let i = 0; i < 10; i++) {
        code += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }

      return code;
    };

    // Gerando codigo de validação
    const code = generateCode();

    // Função para enviar o código ao email do usuário
    async function sendCode(endereco) {
      // Lendo o arquivo HTML do modelo
      const templateCodeVerification = fs.readFileSync(
        "src/config/templatesHTML/verificationCode.html",
        "utf-8"
      );

      // Usando o EJS para renderizar o modelo com dados personalizados
      const templateRenderizado = ejs.render(templateCodeVerification, {
        username: username,
        code: code,
      });
      const mailSent = await transporter.sendMail({
        from: `GF <${SMTP_CONFIG.user}>`,
        to: endereco,
        subject: "GF - Código de validação.",
        html: templateRenderizado,
      });

      console.log(mailSent);
      console.log(`Código (${code}) enviado com sucesso para ${email}`);
    }

    // Enviando o código para o email do usuário
    await sendCode(email);

    // inserindo os dados do usuário no banco {pending_accouts}
    const insertUserQueryPA =
      "INSERT INTO pending (code, username, passwordmd5, password, email) VALUES ($1, $2, $3, $4, $5)";

    await poolPA.query(insertUserQueryPA, [
      code,
      username,
      passwordmd5,
      password,
      email,
    ]);

    res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar usuário" });
  }
};

const confirmAccount = async (req, res) => {
  try {
    const { code, email } = req.body;
    // Verificando se os campos estão preenchidos
    if (!code || !email) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }
    // Regex para verificar se o endereço de email inserido é válidp
    const validateEmail = (value) => {
      const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(value);
    };
    // Regex para verificar se o código insiero é válido
    const validateCode = (value) => {
      regex = /^[a-zA-Z0-9]*$/;
      return regex.test(value);
    };
    // Verificando se o email é válido
    if (!validateEmail(email)) {
      return res
        .status(400)
        .json({ error: "Insira um endereço de email válido." });
    }
    // Verificando se o código é válido
    if (!validateCode(code) || code.length !== 10) {
      return res.status(400).json({ error: "Insira um código válido" });
    }
    // Buscando se os dados inseridos existem no banco de dados
    const codeAndEmailExistsQueryPA =
      "SELECT * FROM pending WHERE code = $1 AND email = $2";
    const { rows: codeAndEmailExistsPA } = await poolPA.query(
      codeAndEmailExistsQueryPA,
      [code, email]
    );
    // Analisando se os dados retornados do banco de dados
    if (codeAndEmailExistsPA.length === 0) {
      return res
        .status(404)
        .json({ error: "código e email não encontrados no banco" });
    }

    // Declarando as variáveis para receber os valores do banco {pending_accounts}
    const { username, passwordmd5, password } = codeAndEmailExistsPA[0];

    // Buscando o ultimo [id] no banco {gf_ls}
    const getLastIdLSQuery = "SELECT MAX(id) FROM accounts";
    const { rows: lastIdLS } = await poolLS.query(getLastIdLSQuery);
    const nextId = (lastIdLS[0].max || 0) + 1;

    // Transferindo os dados para o banco {gf_ls}
    const insertUserQueryLS =
      "INSERT INTO accounts (id, username, password, realname, email) VALUES ($1, $2, $3, $4, $5)";

    await poolLS.query(insertUserQueryLS, [
      nextId,
      username,
      passwordmd5,
      username,
      email,
    ]);

    // Transferindo os dados para o banco {gf_ms}
    const insertUserQueryMS =
      "INSERT INTO tb_user (mid, password, pwd, idnum) VALUES ($1, $2, $3, $4)";

    await poolMS.query(insertUserQueryMS, [
      username,
      passwordmd5,
      password,
      nextId,
    ]);

    // Deletando a linha que contem o valor CODE no banco {pending_accounts}
    const deleteEmailQueryPA = "DELETE FROM pending WHERE code = $1";

    await poolPA.query(deleteEmailQueryPA, [code]);

    // Enviando Email para o usuário informando que sua conta foi registrada com sucesso
    async function successInCreate(endereco) {
      // Lendo o arquivo HTML do modelo
      const templateCodeVerification = fs.readFileSync(
        "src/config/templatesHTML/successInCreate.html",
        "utf-8"
      );

      // Usando o EJS para renderizar o modelo com dados personalizados
      const templateRenderizado = ejs.render(templateCodeVerification, {
        username: username,
      });
      const mailSent = await transporter.sendMail({
        from: `GF <${SMTP_CONFIG.user}>`,
        to: endereco,
        subject: "GF - Código de validação.",
        html: templateRenderizado,
      });

      console.log(mailSent);
      console.log(`Mensagem enviada com sucesso para ${email}`);
    }

    await successInCreate(email);

    res
      .status(201)
      .json({ message: "Criação de conta concluída com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao validar conta de usuário." });
  }
};

module.exports = {
  createUser,
  confirmAccount,
};
