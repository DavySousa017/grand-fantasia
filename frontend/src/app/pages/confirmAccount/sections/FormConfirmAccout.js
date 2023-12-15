"use client";
import React, { useState } from "react";
import SubmitButton from "@/app/components/Buttons/SubmitButton";
import OkModal from "@/app/components/modals/OkModal";
import ConfirmNewUser from "@/services/ConfirmNewUser";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineCode } from "react-icons/ai";

const FormConfirmAccout = () => {
  const router = useRouter();

  const [requesting, setRequesting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (requesting) {
      return;
    }

    setRequesting(true);
    const dados = {
      email: data.email,
      code: data.code,
    };

    try {
      await ConfirmNewUser(dados);
      console.log("Criação de conta concluída com sucesso.");
      setShowModal(true);
    } catch (error) {
      console.log("Erro durante o processo de autenticação de conta", error);
      setRequesting(false);
    }
    setRequesting(false);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-white flex flex-col gap-5 my-10 w-full min-w-[400px]"
      >
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
                  "* Insira um endereço válido")}
            </p>
          )}
        </div>
        <div>
          <span className="text-sm">Código</span>
          <fieldset className="flex flex-row items-center gap-2 p-3 border-2 border-red rounded-[4px]">
            <AiOutlineCode className="text-red text-2xl" />
            <input
              type="text"
              name="code"
              placeholder="Código"
              autoComplete="off"
              maxLength={10}
              className="w-full h-full bg-transparent outline-none focus:outline-none border-none"
              {...register("code", {
                required: true,
                minLength: 10,
                maxLength: 10,
                pattern: /^[a-zA-Z0-9]*$/,
              })}
            />
          </fieldset>
          {errors.code && (
            <p className="text-sm text-red">
              {(errors.code.type === "required" &&
                "* Este campo é obrigatório") ||
                (errors.code.type === "minLength" &&
                  "* Tamanho mínimo 10 caracteres") ||
                (errors.code.type === "maxLength" &&
                  "Tamanho máximo 10 caracteres") ||
                (errors.code.type === "pattern" && "* Apenas letras e números")}
            </p>
          )}
        </div>
        <SubmitButton requesting={requesting} text="Cadastrar" />
      </form>

      {showModal && (
        <OkModal
          title="Sua Conta Está Oficialmente Viva!"
          image="bgmodal.png"
          text={
            <p className="text-justify">
              <b>Olha eu aqui de novo.</b> <br />
              Só passando pra dar aquela notícia boa:{" "}
              <b>você agora faz parte do bonde!</b> Se jogue e explore tudo e
              qualquer coisa que precisar, tamo junto.
              <br />
              Ah, e não esquece de explorar tudo que temos para oferecer. Desde
              conteúdos exclusivos até recursos que vão te surpreender. Sua
              jornada no <b>Grand Fantasia</b> está só começando! Fique de olho
              no nosso{" "}
              <b>
                <a href="https://discord.gg/Ppafw8fhQF" target="_blank">
                  Discord
                </a>
              </b>{" "}
              e nas atualizações que estão a caminho. Mal podemos esperar para
              compartilhar o que preparamos para você.
            </p>
          }
          onClick={() => router.push("/")}
          alt="Navegue para a página de verificação de código"
        />
      )}
    </section>
  );
};

export default FormConfirmAccout;
