import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessfullyModal = () => {
  return (
    <div className="absolute top-0 left-0 min-h-screen w-screen flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col justify-center gap-6 p-10 bg-dark rounded-md border border-green">
        <div className="flex flex-row justify-center gap-6">
          <div className="p-4 text-3xl bg-black/30 rounded-md text-green h-fit w-fit">
            <AiOutlineCheckCircle />
          </div>
          <div className="flex flex-col gap-2 max-w-[380px]">
            <h3 className="text-green text-xl font-semibold">
              Successfully applied!
            </h3>
            <p className="font-normal text-base">
              Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam
              nibh suscipit aliquam dolor. Nunc sit nunc aliquet justo, facilisi
              leo. Nulla a eget tincidunt integer orci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullyModal;
