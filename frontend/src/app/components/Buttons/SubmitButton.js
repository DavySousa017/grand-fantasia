import React from "react";

const SubmitButton = (props) => {
  return (
    <button
      type="submit"
      className={
        props.requesting
          ? "py-3 w-full text-center bg-red/20 rounded-[4px] uppercase text-lg font-semibold duration-300 cursor-wait"
          : "py-3 w-full text-center bg-red rounded-[4px] uppercase text-lg font-semibold hover:bg-red/60 duration-300 cursor-pointer"
      }
    >
      {props.text}
    </button>
  );
};

export default SubmitButton;
