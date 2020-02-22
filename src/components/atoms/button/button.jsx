import React from "react";

const Button = props => {
  return (
    <button onClick={props.onClick}>
      {props.text !== undefined ? props.text : "notext"}
    </button>
  );
};

export default Button;
