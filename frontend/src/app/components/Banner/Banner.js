import React from "react";

const Banner = () => {
  return (
    <div className="m-auto">
      <h1 className="text-[5rem] font-bold uppercase text-center text-white/80 leading-none max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-[440px]:text-3xl z-50">
        Grand Fantasia <br />
        <span className="text-red">xxxxx</span>
      </h1>
      <p className="uppercase text-black/70 text-sm font-semibold text-center max-md:text-xs">
        servidor privado de grand fantasia
      </p>
    </div>
  );
};

export default Banner;
