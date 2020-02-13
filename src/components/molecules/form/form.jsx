import React from "react";

import Input from "./../../atoms/input/input.jsx";
import Button from "./../../atoms/button/button.jsx";

export default class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <Input
          name={this.props.input.name}
          type={this.props.input.type}
          placeholder={this.props.input.placeholder}
        />
        <Button text={this.props.button.text} />
      </div>
    );
  }
}
