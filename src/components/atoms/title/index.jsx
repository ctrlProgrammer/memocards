import React from "react";

const Title = props => {
  return <h1>{props.title !== undefined ? props.title : "notitle"}</h1>;
};

export default Title;
