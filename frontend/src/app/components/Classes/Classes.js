"use client";
import React, { useState, useEffect } from "react";
import ClassesSlide from "./ClassesSlide";
import { TbArrowBigRightLines, TbArrowBigLeftLines } from "react-icons/tb";

const Classes = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [heightSlide, setHeightSlide] = useState(900);

  const nextSlide = () => {
    let currentValue = currentSlider;
    if (currentValue < 3) {
      currentValue += 1;
      setCurrentSlider(currentValue);
    } else {
      setCurrentSlider(0);
    }
  };

  const prevSlide = () => {
    let currentValue = currentSlider;
    if (currentValue > 0) {
      currentValue -= 1;
      setCurrentSlider(currentValue);
    } else {
      setCurrentSlider(3);
    }
  };

  useEffect(() => {
    const slider = document.querySelectorAll(".slider");
    const SliderComponent = document.getElementById("SliderComponent");

    setHeightSlide(slider[currentSlider].offsetHeight);
    SliderComponent.style.height = heightSlide + "px";

    window.addEventListener("resize", () => {
      setHeightSlide(slider[currentSlider].clientHeight);
      setHeightSlide(slider[currentSlider].offsetHeight);
      SliderComponent.style.height = heightSlide + "px";
    });
    slider.forEach((item) => {
      item.classList.add("opacity-0");
      item.classList.add("z-0");
      item.classList.remove("z-10");
    });
    slider[currentSlider].classList.remove("opacity-0");
    slider[currentSlider].classList.remove("z-0");
    slider[currentSlider].classList.add("z-10");
  });

  return (
    <div
      id="classes"
      className={
        (currentSlider == 0 &&
          "flex justify-center items-center bg-gradient-to-r from-bgFromArcher via-bgToArcher to-bgFromArcher max-xl:py-10") ||
        (currentSlider == 1 &&
          "flex justify-center items-center bg-gradient-to-r from-bgFromWarrior via-bgToWarrior to-bgFromWarrior max-xl:py-10") ||
        (currentSlider == 2 &&
          "flex justify-center items-center bg-gradient-to-r from-bgFromPriest via-bgToPriest to-bgFromPriest max-xl:py-10") ||
        (currentSlider == 3 &&
          "flex justify-center items-center bg-gradient-to-r from-bgFromMage via-bgToMage to-bgFromMage max-xl:py-10")
      }
    >
      <section
        id="SliderComponent"
        className={`w-full max-w-[1440px] min-h-[900px] py-6 relative`}
      >
        <button
          type="button"
          onClick={() => prevSlide()}
          className="p-2 text-2xl absolute top-0 bottom-0 left-0 z-20 hover:text-red duration-300"
        >
          <TbArrowBigLeftLines />
        </button>
        <button
          type="button"
          onClick={() => nextSlide()}
          className="p-2 text-2xl absolute top-0 bottom-0 right-0 z-20 hover:text-red duration-300"
        >
          <TbArrowBigRightLines />
        </button>
        <div className="slider absolute top-1/2 left-0 right-0 -translate-y-1/2 mx-auto opacity-0 z-0 duration-700">
          <ClassesSlide
            class="Caçador"
            nextClass01="Ranger"
            nextClass02="Assassino"
            image="archer.png"
            typeOfSkill="Física"
            typeOfAtack=" a Distância"
            def={2}
            defm={2}
            atack={4}
            descriptionAtack="Utiliza arcos, rifles, espadas de uma e duas mãos."
            descriptionClass="O Caçador é um especialista em combate à distância, usando arcos ou riflex para abater inimigos com precisão. Ágil e furtivo, pode se movimentar silenciosamente, surpreendendo adversários.Se busca um personagem letal e estratégico, o Caçador é a escolha ideal."
          />
        </div>
        <div className="slider absolute top-1/2 left-0 right-0 -translate-y-1/2 mx-auto opacity-0 z-0 duration-700">
          <ClassesSlide
            class="Lutador"
            nextClass01="Paladino"
            nextClass02="Berserker"
            image="warrior.png"
            typeOfSkill="Física"
            typeOfAtack=" Curto"
            def={4}
            defm={2}
            atack={5}
            descriptionAtack="Utiliza arcos, rifles, escudos, martelos de uma e duas mãos, machados de uma e duas mãos e espadas de uma e duas mãos."
            descriptionClass="O lutador é um guerreiro especializado em combate corpo a corpo. Com habilidades físicas, é um mestre em causar danos e resistir a ataques. Sua agilidade e habilidades de combo o tornam uma força formidável no campo de batalha. Se você busca um personagem forte e destemido para liderar o ataque, o Lutador é a escolha perfeita."
          />
        </div>
        <div className="slider absolute top-1/2 left-0 right-0 -translate-y-1/2 mx-auto opacity-0 z-0 duration-700">
          <ClassesSlide
            class="Sacerdote"
            nextClass01="Clérigo"
            nextClass02="Sábio"
            image="priest.png"
            typeOfSkill="Física/Mágica/Cura"
            typeOfAtack=" Híbrido"
            def={3}
            defm={4}
            atack={3}
            descriptionAtack="Utiliza cajados, martelos de uma e duas mãos, escudos e relíquias."
            descriptionClass="O Sacerdote é um especialista em cura e suporte mágico, vital para grupos de jogadores. Com habilidades de cura e remoção de efeitos negativos, sua devoção aos deuses fortalece o grupo.Os Sacerdotes desempenham um papel crucial no equilíbrio do jogo."
          />
        </div>
        <div className="slider absolute top-1/2 left-0 right-0 -translate-y-1/2 mx-auto opacity-0 z-0 duration-700">
          <ClassesSlide
            class="Mago"
            nextClass01="Necromante"
            nextClass02="Feiticeiro"
            image="mage.png"
            typeOfSkill="Mágica"
            typeOfAtack=" a Distância"
            def={2}
            defm={2}
            atack={4}
            descriptionAtack="Utiliza cajados e relíquias."
            descriptionClass="O Mago é um conjurador especializado em magias poderosas. Ele se destaca por causar danos com feitiços elementares como fogo, gelo e relâmpagos. Apesar frágil fisicamente, sua habilidade em controlar o campo de batalha e proteger aliados faz dele um membro valioso em grupos. Se busca um personagem capaz de lançar magias devastadoras, o Mago é a escolha perfeita."
          />
        </div>
      </section>
    </div>
  );
};

export default Classes;
