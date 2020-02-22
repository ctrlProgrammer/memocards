import React from "react";

const Input = props => {
  return (
    <input
      type={props.type !== undefined ? props.type : "notype"}
      name={props.name !== undefined ? props.name : "noname"}
      placeholder={
        props.placeholder !== undefined ? props.placeholder : "noplaceholder"
      }
      value={props.value !== undefined ? props.value : "novalue"}
      onChange={props.onChange}
    />
  );
};

export default Input;
