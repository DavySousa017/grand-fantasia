import React from "react";

const ToAcceptModal = () => {
  return (
    <div className="absolute top-0 left-0 min-h-screen w-screen flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-[750px] flex flex-col justify-center gap-6 p-10 bg-dark rounded-md border border-green">
        <h3 className="text-green text-xl font-semibold">
          Sure you want to accept?
        </h3>
        <p>
          Egestas arcu egestas parturient dui vitae. Ornare risus id ullamcorper
          in ut. Vestibulum neque ullamcorper non orci vel, consectetur mi,
          pulvinar. Eu lectus quis leo viverra lacus non fames est ut.
        </p>
        <div className="flex flex-row gap-4 justify-end">
          <button className="font-semibold border border-red text-red bg-transparent w-full max-w-[180px] px-5 py-3 rounded-md hover:bg-red/30 hover:text-white hover:scale-105 duration-300">
            No, cancel!
          </button>
          <button className="font-semibold border border-green text-green bg-transparent w-full max-w-[180px] px-5 py-3 rounded-md hover:bg-green/30 hover:text-white hover:scale-105 duration-300">
            Yes, confirm!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToAcceptModal;
