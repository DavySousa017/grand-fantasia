Sistema Full Stack para Servidor Privado de Grand Fantasia
---------

Este projeto consiste em um sistema full stack desenvolvido para servidores privado do jogo Grand Fantasia. Ele é composto por um front-end desenvolvido em Next.js e um back-end em Node.js. O objetivo é permitir que os usuários se cadastrem na plataforma, obtenham informações do servidor e realizem operações de gerenciamento de conta.

Passo a passo para Executar o Back-end(Node.js)
---------

Pré-requisitos:

Node.js instalado (versão 12 ou superior)
Banco de dados configurado (postgres)

01 - Clone o repositório

02 - Abra o terminal ou prompt de comando:
Navegue até o diretório do seu projeto. Use o comando cd para mudar de diretório.

03 - Acesse a pasta do back-end:
O projeto contem uma estrutura de pastas, então certifique-se de entrar na pasta do back-end. Por exemplo: cd nome-do-projeto/backend .

04 - Execute o comando de instalação de dependências:
Use o comando npm install para instalar todas as dependências listadas no arquivo package.json: npm install
Isso baixará e instalará todas as bibliotecas necessárias na pasta node_modules.

05 - Configuração Adicional: Dependendo do projeto, pode ser necessário realizar outras configurações, como configurar variáveis de ambiente, ajustar arquivos de configuração, ou configurar o banco de dados.
No banco de dados -> No banco gf_ls, será necessário criar um novo campo para receber o endereço de email do usuário.
Crie um novo banco de dados chamando pending_accounts onde ele deverá possuir os seguintes campos: code, username, passwordmd5, password e email.

No back-end -> Em src/controllers/userController.js defina a rota do seu banco de dados nas seguintes variáveis :
PoolLS - informe a rota do banco gf_ls .
PoolMS - informe a rota do banco gf_ms .
poolPA - informe a rota do banco pending_accounts .

No back-end -> Em src/config/smtp.js insira os dados de seu email para enviar email com o SMTP.
Como configurar o email para envios de email SMTP : https://youtu.be/OJxShAGAvLM?si=byxdE9FuMVWKPqOs .

06 - Inicializar o sistema back-end :
Navegue para o diretório do back-end e execute o seguinte comando : Node src/app.js.

Para alterar a porta do back-end navegue para backend\src\app.js e altere o numero "3000" na linha 12 para a porta desejada.

Caso queira modificar a mensagem enviada ao email do usuário, basta personalizar os arquivos HTML que existem em src\config\templatesHTML.



Passo a passo para Executar o Front-end(Next.js)
---------

Pré-requisitos:

Node.js instalado (versão 12 ou superior)
Acesso ao terminal ou prompt de comando.
Passo a passo:

01 - Abra o terminal ou prompt de comando:

02 - Navegue até o diretório do seu projeto e acesse a pasta do front-end:
Seu projeto pode ter uma estrutura de pastas, então certifique-se de entrar na pasta do front-end. Por exemplo: cd nome-do-projeto/frontend

03 Execute o comando de instalação de dependências:
Use o comando "npm install" para instalar todas as dependências listadas no arquivo package.json .

04 Configuração Adicional (se necessário):

Verifique se todas as configurações do back-end (URLs de API, por exemplo) estão corretas nos arquivos do front-end.
A variável API_BASE_URL em frontend\src\services deve receber o endereço do banco de dados. exemplo : http://localhost:3000 .

Para alterar a porta do front-end basta acessar frontend\package.json e alterar o valor de "5575" para o valor da porta desejada na linha 6 e 8.

Observações Importantes:

O processo de instalação pode levar alguns minutos, dependendo do número de dependências e da velocidade da conexão com a internet.
Verifique se o Node.js está configurado corretamente antes de iniciar o processo de instalação.
Após a instalação, verifique se não há erros relatados no terminal. Se houver, resolva-os antes de prosseguir.
Sempre verifique a documentação do projeto para instruções específicas de instalação e configuração, já que alguns projetos podem ter requisitos adicionais.
Seguindo esses passos, você deve conseguir instalar todas as dependências necessárias para o back-end (Node.js) e o front-end (Next.js) do seu projeto.
