"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const scrollSmoothly = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    if (menuOpen) {
      body.classList.add("overflow-hidden");
    } else body.classList.remove("overflow-hidden");
  });

  return (
    <div className="bg-dark/50 backdrop-blur flex flex-row items-center justify-center h-fit border-b border-red fixed w-full z-50">
      <nav className="w-full max-w-[1440px] flex flex-row items-center min-h-[4rem] font-semibold mx-8">
        <div className="flex flex-row gap-[3.75rem] w-full max-lg:justify-between">
          <div className="text-xl font-bold whitespace-nowrap text-red w-fit flex items-center">
            Grand Fantasia
          </div>
          <ul
            className={
              menuOpen
                ? "flex flex-row justify-between w-full max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:w-screen max-lg:h-screen max-lg:flex-col max-lg:justify-center max-lg:gap-10 max-lg:bg-menosDark duration-300"
                : "flex flex-row justify-between w-full max-lg:absolute max-lg:top-0 max-lg:left-full max-lg:w-screen max-lg:h-screen max-lg:flex-col max-lg:justify-center max-lg:gap-10 max-lg:bg-transparent duration-300"
            }
          >
            <div className="flex flex-row items-center gap-10 max-lg:flex-col">
              <li className="flex flex-row">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    scrollSmoothly("inicio");
                  }}
                  className="text-base"
                >
                  Início
                </button>{" "}
              </li>
              <li className="flex flex-row">
                <button
                  onClick={(e) => {
                    setMenuOpen(false);
                    scrollSmoothly("informacoes");
                  }}
                  className="text-base"
                >
                  Apresentação
                </button>{" "}
              </li>
              <li className="flex flex-row">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    scrollSmoothly("classes");
                  }}
                  className="text-base"
                >
                  Classes
                </button>
              </li>
            </div>
            <div className="flex flex-row items-center gap-5 max-lg:flex-col max-lg:gap-10">
              <a
                href="/pages/register"
                className="lg:border border-red py-2 px-5 lg:hover:text-black lg:relative lg:flex lg:after:absolute lg:after:content-[''] lg:after:-z-10 lg:after:bottom-0 lg:after:left-0 lg:after:w-0 lg:after:h-0 lg:hover:after:w-full lg:after:bg-white lg:hover:after:h-full lg:after:duration-300 lg:duration-300"
              >
                Registre-se
              </a>
              <a
                href="/"
                target="_blank"
                className="lg:border border-red py-2 px-5 lg:text-black lg:hover:text-white lg:relative lg:after:absolute lg:after:content-[''] lg:after:-z-10 lg:after:top-0 lg:after:right-0 lg:after:w-full lg:after:h-full lg:hover:after:w-0 lg:hover:after:h-0 lg:after:bg-white lg:after:duration-300 lg:duration-300"
              >
                Baixar
              </a>
            </div>
          </ul>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-6 h-6 relative"
            >
              <span
                className={
                  menuOpen
                    ? "absolute top-1/2 left-0 w-full h-0.5 bg-red rotate-45 -translate-y-1/2 duration-300"
                    : "absolute top-0 left-0 w-full h-0.5 bg-gray-500 duration-300"
                }
              ></span>
              <span
                className={
                  menuOpen
                    ? "absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-transparent duration-300"
                    : "absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-gray-500 duration-300"
                }
              ></span>
              <span
                className={
                  menuOpen
                    ? "absolute bottom-1/2 left-0 w-full h-0.5 bg-red -rotate-45 translate-y-1/2 duration-300"
                    : "absolute bottom-0 left-0 w-full h-0.5 bg-gray-500 duration-300"
                }
              ></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
