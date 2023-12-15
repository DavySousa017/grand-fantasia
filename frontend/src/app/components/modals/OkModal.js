import React from "react";

const OkModal = (props) => {
  return (
    <div className="absolute top-0 left-0 min-h-screen w-screen flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
      <div className="w-full max-w-[750px] flex flex-col justify-center gap-6 p-6 bg-white rounded-md border border-green text-black">
        <div className="flex flex-col gap-6">
          <h3 className="text-green text-xl font-semibold">{props.title}</h3>
          <div>
            <img src={`/img/${props.image}`} alt="" />
          </div>
          <div>{props.text}</div>
        </div>
        <div className="flex flex-row gap-4 justify-end">
          <button
            onClick={props.onClick}
            alt={props.alt}
            className="font-semibold border border-green text-green bg-transparent w-full max-w-[180px] px-5 py-3 rounded-md hover:bg-green/50 hover:text-white hover:scale-105 duration-300"
          >
            Ok!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OkModal;
