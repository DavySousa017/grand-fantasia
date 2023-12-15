import React from "react";

const H2 = (props) => {
  return (
    <h2 className="text-[2.75rem] uppercase font-bold">
      {props.text}
      <span className="text-red">{props.red}</span>
    </h2>
  );
};

export default H2;
