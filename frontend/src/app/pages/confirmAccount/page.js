"use client";
import Footer from "@/app/components/Footer/Footer";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import FormConfirmAccout from "./sections/FormConfirmAccout";

const ConfirmAccount = () => {
  return (
    <div className="w-full bg-dark flex flex-col justify-between items-center min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto pt-14 px-8">
        <a
          href="/"
          className="flex flex-row items-center gap-2 text-red text-xl font-bold w-fit"
        >
          <AiOutlineArrowLeft />
          Voltar
        </a>
      </div>
      <FormConfirmAccout />
      <Footer />
    </div>
  );
};

export default ConfirmAccount;
