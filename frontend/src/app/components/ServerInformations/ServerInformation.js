"use client";
import React from "react";
import H2 from "../Texts/H2";

const ServerInformation = () => {
  return (
    <section
      id="informacoes"
      className="w-full max-w-[1440px] flex flex-col justify-center items-center mx-auto px-8 gap-[82px] py-[165px]"
    >
      <H2 text="Apresentação" />
      <div className="flex flex-row flex-wrap justify-around items-start gap-x-10 gap-y-16 w-full">
        <div className="w-full max-w-[410px] flex flex-col justify-center items-center gap-6 p-5 hover:-translate-y-1 hover:scale-[103%] hover:bg-red hover:rounded-md duration-300">
          <div className="w-full h-[430px] flex justify-center items-center p-5">
            <img
              src="/img/Assassin_Portrait.webp"
              alt=""
              className="object-contain h-full"
            />
          </div>
          <h3 className="text-[1.3rem] font-medium text-center">
            Arena PvP: Desafios Épicos em Combate Player-vs-Player
          </h3>
          <p className="font-thin text-white/70 text-justify">
            Enfrente outros heróis em batalhas intensas na Arena PvP de "Reinos
            Épicos". Prove sua habilidade estratégica, domine as habilidades de
            seu personagem e suba nas classificações, desafiando jogadores de
            todo o mundo em combates emocionantes e repletos de adrenalina.
          </p>
        </div>
        <div className="w-full max-w-[410px] flex flex-col justify-center items-center gap-6 p-5 hover:-translate-y-1 hover:scale-[103%] hover:bg-red hover:rounded-md duration-300 ">
          <div className="w-full h-[430px] flex justify-center items-center p-5">
            <img
              src="/img/Berserker_Portrait.webp"
              alt=""
              className="object-contain h-full"
            />
          </div>
          <h3 className="text-[1.3rem] font-medium text-center">
            PvE Dinâmico: Desvende Mistérios e Derrote Criaturas Épicas{" "}
          </h3>
          <p className="font-thin text-white/70 text-justify">
            Explore ambientes deslumbrantes e enfrente uma variedade de
            criaturas místicas em emocionantes aventuras PvE. De masmorras
            desafiadoras a chefes épicos, cada encontro oferece novos desafios e
            recompensas. Aprofunde-se na narrativa envolvente enquanto protege
            os Reinos Épicos da iminente escuridão.
          </p>
        </div>
        <div className="w-full max-w-[410px] flex flex-col justify-center items-center gap-6 p-5 hover:-translate-y-1 hover:scale-[103%] hover:bg-red hover:rounded-md duration-300 ">
          <div className="w-full h-[430px] flex justify-center items-center p-5">
            <img
              src="/img/Ranger_Portrait.webp"
              alt=""
              className="object-contain h-full"
            />
          </div>
          <h3 className="text-[1.3rem] font-medium text-center">
            Diversidade de Conteúdo: Explorando os Reinos Épicos{" "}
          </h3>
          <p className="font-thin text-white/70 text-justify">
            "Reinos Épicos" oferece uma ampla gama de atividades e conteúdos
            para todos os tipos de jogadores. Personalize seu personagem,
            participe de eventos sazonais, explore mapas vastos, descubra
            segredos ocultos e desfrute da diversidade que o jogo tem a
            oferecer. Seja você um aventureiro solitário ou um membro ativo de
            guilda, há sempre algo novo para explorar nos Reinos Épicos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServerInformation;
