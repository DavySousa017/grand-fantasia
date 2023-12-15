import Footer from "@/app/components/Footer/Footer";
import React from "react";
import FormRegister from "./sections/FormRegister";
import { AiOutlineArrowLeft } from "react-icons/ai";

const RegisterLayout = () => {
  return (
    <main className="bg-dark text-white min-h-screen flex flex-col justify-between">
      <div className="w-full max-w-[1440px] mx-auto pt-14 px-8">
        <a
          href="/"
          className="flex flex-row items-center gap-2 text-red text-xl font-bold w-fit"
        >
          <AiOutlineArrowLeft />
          Voltar
        </a>
      </div>
      <div className="w-full max-w-[1440px] flex flex-row gap-8 mx-auto px-8 my-10">
        <div className="w-1/2 flex justify-end max-sm:w-full max-sm:justify-center">
          <FormRegister />
        </div>
        <div className="w-1/2 flex flex-row bg-[url('/img/Demonologist_Portrait.webp')] bg-contain bg-no-repeat bg-center max-sm:hidden"></div>
      </div>
      <Footer />
    </main>
  );
};

export default RegisterLayout;
