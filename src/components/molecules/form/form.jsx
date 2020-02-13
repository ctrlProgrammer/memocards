import React from "react";

import Input from "./../../atoms/input/input.jsx";
import Button from "./../../atoms/button/button.jsx";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      input: ""
    };
  }

  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className="form">
        <Input
          onChange={this.handleInput}
          name={this.props.input.name}
          type={this.props.input.type}
          placeholder={this.props.input.placeholder}
          value={this.state.input}
        />
        <Button text={this.props.button.text} />
      </div>
    );
  }
}
