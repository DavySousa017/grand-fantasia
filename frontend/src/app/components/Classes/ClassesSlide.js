import React from "react";
import { BsShieldShaded } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaShieldVirus } from "react-icons/fa";
import { GiPointySword } from "react-icons/gi";

const ClassesSlide = (props) => {
  return (
    <div className="slides w-full h-full flex flex-row items-center justify-between p-8 max-xl:flex-col max-xl:gap-10">
      <div className="w-full max-w-[390px] flex flex-col">
        <h3 className="text-5xl font-bold text-center pb-2 uppercase">
          {props.class}
        </h3>
        <div className="w-full h-[80px] flex items-end gap-[100px] bg-[url('/img/classes-trans.png')] bg-contain bg-no-repeat text-xl font-bold">
          <div className="w-1/2 flex justify-end">
            <span>{props.nextClass01}</span>
          </div>
          <div className="w-1/2 flex justify-start">
            <span>{props.nextClass02}</span>
          </div>
        </div>
        <p className="text-white/70 pt-7 text-justify">
          {props.descriptionClass}
        </p>
      </div>
      <div>
        <img src={`/img/${props.image}`} alt="" className="w-[360px]" />
      </div>
      <div className="w-full max-w-[390px] flex flex-col gap-12 max-xl:text-center">
        <div>
          <div className="flex flex-col gap-1 leading-[100%]">
            <span className="text-red font-bold uppercase">
              HABILIDADES {props.typeOfSkill}
            </span>
            <h4 className="text-4xl font-bold max-[440px]:text-2xl">
              Ataque a {props.typeOfAtack}
            </h4>
          </div>
          <p className="text-white/70 pt-6">{props.descriptionAtack}</p>
        </div>
        <div className="flex flex-row xl:gap-[20px] max-xl:justify-between">
          <div className="flex flex-col justify-center items-center gap-5 w-fit">
            <div className="border border-red text-red p-4 rounded-full w-fit">
              <BsShieldShaded className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm max-[440px]:text-xs">Defesa Físca</span>
              <span className="flex flex-row text-red">
                <AiFillStar className={props.def < 1 && "text-black/50"} />
                <AiFillStar className={props.def < 2 && "text-black/50"} />
                <AiFillStar className={props.def < 3 && "text-black/50"} />
                <AiFillStar className={props.def < 4 && "text-black/50"} />
                <AiFillStar className={props.def < 5 && "text-black/50"} />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-fit">
            <div className="border border-red text-red p-4 rounded-full w-fit">
              <FaShieldVirus className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm max-[440px]:text-xs">Defesa Mágica</span>
              <span className="flex flex-row text-red">
                <AiFillStar className={props.defm < 1 && "text-black/50"} />
                <AiFillStar className={props.defm < 2 && "text-black/50"} />
                <AiFillStar className={props.defm < 3 && "text-black/50"} />
                <AiFillStar className={props.defm < 4 && "text-black/50"} />
                <AiFillStar className={props.defm < 5 && "text-black/50"} />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-fit">
            <div className="border border-red text-red p-4 rounded-full w-fit">
              <GiPointySword className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm max-[440px]:text-xs">
                Dano de Ataque
              </span>
              <span className="flex flex-row text-red">
                <AiFillStar className={props.atack < 1 && "text-black/50"} />
                <AiFillStar className={props.atack < 2 && "text-black/50"} />
                <AiFillStar className={props.atack < 3 && "text-black/50"} />
                <AiFillStar className={props.atack < 4 && "text-black/50"} />
                <AiFillStar className={props.atack < 5 && "text-black/50"} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesSlide;
