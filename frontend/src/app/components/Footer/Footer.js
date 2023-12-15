import React from "react";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark flex justify-center items-center min-h-[3.75rem] w-full text-white">
      <div className="w-full max-w-[1440px] flex justify-between items-center mx-8 max-sm:flex-col max-sm:gap-2 max-sm:p-2 text-center">
        <span className="text-red text-xl font-bold max-md:text-base">
          Grand Fantasia
        </span>
        <p className="max-md:text-xs">
          Grand Fantasia © 2023. All rights reserved.
        </p>
        <a
          className="hover:text-[#5662f6] hover:rotate-[360deg] duration-500"
          href="/"
          target="_blank"
        >
          <span>
            <BsDiscord className="text-2xl" />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
