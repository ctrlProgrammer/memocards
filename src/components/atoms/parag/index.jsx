import React from "react";

const Parag = props => {
  return <p>{props.text !== undefined ? props.text : "notext"}</p>;
};

export default Parag;
