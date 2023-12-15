"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "@/app/components/Buttons/SubmitButton";
import { useForm } from "react-hook-form";
import RegisterNewUser from "@/services/RegisterNewUser";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUnlock,
} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import OkModal from "@/app/components/modals/OkModal";

const FormRegister = () => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] =
    useState(false);
  const [requesting, setRequesting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (requesting) {
      return;
    }
    if (data.confirmPassword !== data.password) {
      return setError("confirmPassword", {
        type: "manual",
        message: "* As senhas não coincidem.",
      });
    }

    setRequesting(true);
    const dados = {
      username: data.username.toLowerCase(),
      email: data.email,
      password: data.password,
    };

    try {
      await RegisterNewUser(dados);
      console.log("Usuário cadastrado com sucesso");
      setShowModal(true);
    } catch (error) {
      console.log(error);
      if (
        error.response.data.error == "Nome de usuário já está sendo utilizado."
      ) {
        setError("username", {
          type: "manual",
          message: "Nome de usuário já está sendo utilizado.",
        });
      }
      if (
        error.response.data.error ==
        "Esse endereço de email já está sendo utilizado."
      ) {
        setError("email", {
          type: "manual",
          message: "Esse endereço de email já está sendo utilizado.",
        });
      }
      setRequesting(false);
    }
    setRequesting(false);
  };

  return (
    <section className="w-full max-w-[340px] text-white flex flex-col gap-8">
      <h1 className="text-red text-2xl flex flex-row items-center gap-3 font-bold">
        <span>
          <FiLogIn />
        </span>
        Faça seu cadastro
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <span className="text-sm">Usuário</span>
          <fieldset className="flex flex-row items-center gap-2 p-3 border-2 border-red rounded-[4px]">
            <AiOutlineUser className="text-red text-2xl" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              className="w-full h-full bg-transparent outline-none focus:outline-none border-none"
              {...register("username", {
                required: true,
                minLength: 8,
                maxLength: 32,
                pattern: /^[a-zA-Z0-9]*$/,
              })}
            />
          </fieldset>
          {errors.username && (
            <p className="text-sm text-red">
              {(errors.username.type === "required" &&
                "* Este campo é obrigatório.") ||
                (errors.username.type === "pattern" &&
                  "* Somente letras e números.") ||
                (errors.username.type === "minLength" &&
                  "* Tamanho mínimo 8 caracteres") ||
                (errors.username.type === "maxLength" &&
                  "* Tamanho máximo 32 caracteres") ||
                (errors.username.type === "manual" &&
                  "* Nome de usuário já está sendo utilizado.")}
            </p>
          )}
        </div>
        <div>
          <span className="text-sm">Email</span>
          <fieldset className="flex flex-row items-center gap-2 p-3 border-2 border-red rounded-[4px]">
            <AiOutlineMail className="text-red text-2xl" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="w-full h-full bg-transparent outline-none focus:outline-none border-none"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
          </fieldset>
          {errors.email && (
            <p className="text-sm text-red">
              {(errors.email.type === "required" &&
                "* Este campo é obrigatório") ||
                (errors.email.type === "pattern" &&
                  "* Insira um endereço válido") ||
                (errors.email.type === "manual" &&
                  "* Esse endereço de email já está sendo utilizado")}
            </p>
          )}
        </div>
        <div>
          <span className="text-sm">Senha</span>
          <fieldset className="flex flex-row items-center gap-2 p-3 border-2 border-red rounded-[4px]">
            <button
              type="button"
              onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            >
              {passwordIsVisible ? (
                <AiOutlineUnlock className="text-red text-2xl" />
              ) : (
                <AiOutlineLock className="text-red text-2xl" />
              )}
            </button>
            <input
              type={passwordIsVisible ? "text" : "password"}
              name="password"
              placeholder="Senha"
              autoComplete="off"
              className="w-full h-full bg-transparent outline-none focus:outline-none border-none"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 32,
                pattern: /^[a-zA-Z0-9*#@]*$/,
              })}
            />
          </fieldset>
          {errors.password && (
            <p className="text-sm text-red">
              {(errors.password.type === "required" &&
                "* Este campo é obrigatório.") ||
                (errors.password.type === "pattern" &&
                  "* Somente letras, números, '#', '@' e '*'") ||
                (errors.password.type === "minLength" &&
                  "* Tamanho mínimo 8 caracteres") ||
                (errors.password.type === "maxLength" &&
                  "* Tamanho máximo 32 caracteres")}
            </p>
          )}
        </div>
        <div>
          <span className="text-sm">Confirme a senha</span>
          <fieldset className="flex flex-row items-center gap-2 p-3 border-2 border-red rounded-[4px]">
            <button
              type="button"
              onClick={() =>
                setConfirmPasswordIsVisible(!confirmPasswordIsVisible)
              }
            >
              {confirmPasswordIsVisible ? (
                <AiOutlineUnlock className="text-red text-2xl" />
              ) : (
                <AiOutlineLock className="text-red text-2xl" />
              )}
            </button>
            <input
              type={confirmPasswordIsVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Senha"
              autoComplete="off"
              className="w-full h-full bg-transparent outline-none focus:outline-none border-none"
              {...register("confirmPassword", {
                required: true,
                minLength: 8,
                maxLength: 32,
                pattern: /^[a-zA-Z0-9*#@]*$/,
              })}
            />
          </fieldset>
          {errors.confirmPassword && (
            <p className="text-sm text-red">
              {(errors.confirmPassword.type === "required" &&
                "* Este campo é obrigatório.") ||
                (errors.confirmPassword.type === "pattern" &&
                  "* Somente letras, números, '#', '@' e '*'") ||
                (errors.confirmPassword.type === "minLength" &&
                  "* Tamanho mínimo 8 caracteres") ||
                (errors.confirmPassword.type === "maxLength" &&
                  "* Tamanho máximo 32 caracteres") ||
                errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div>
          <SubmitButton requesting={requesting} text="Cadastrar" />
        </div>
      </form>
      {showModal && (
        <OkModal
          title="Desbloqueie Seu Acesso Agora - Código de Verificação"
          image="bgmodal.png"
          text={
            <p className="text-justify">
              <b>Eae, beleza?</b> <br />
              Parece que você está prestes a entrar no nosso universo. Antes de
              seguir, vamos garantir que você é realmente você, tá ligado?
              Agora, o pulo do gato! Basta clicar no <b>"ok!"</b> abaixo e você
              será
              <b> redirecionado</b> para uma página segura. Lá, você terá apenas
              que confirmar seu <b> email</b> e colar o<b> código</b> que
              enviamos para o seu <b>email</b> e sua conta ficará disponível
              para jogar. Fácil assim!
            </p>
          }
          onClick={() => router.push("/pages/confirmAccount")}
          alt="Navegue para a página de verificação de código"
        />
      )}
    </section>
  );
};

export default FormRegister;
