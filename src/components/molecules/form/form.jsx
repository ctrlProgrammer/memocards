import React from "react";

import Input from "./../../atoms/input/input.jsx";
import Button from "./../../atoms/button/button.jsx";

export default class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <Input name="name" type="text" placeholder="Nombre" />
        <Button text="Jugar" />
      </div>
    );
  }
}
