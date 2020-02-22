import React from "react";

const Error = props => {
  return (
    <span className="error">
      {props.text !== undefined ? props.text : "notext"}
    </span>
  );
};

export default Error;
