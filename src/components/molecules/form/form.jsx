import React from "react";

import Input from "./../../atoms/input";
import Button from "./../../atoms/button";

export default class Form extends React.Component {
  state = {
    input: ""
  };

  handleInput = e => this.setState({ input: e.currentTarget.value });

  render() {
    return (
      <form className="form" onSubmit={e => this.props.handleInput(e)}>
        <Input
          onChange={this.handleInput}
          name={this.props.input.name}
          type={this.props.input.type}
          placeholder={this.props.input.placeholder}
          value={this.state.input}
        />
        <Button text={this.props.button.text} />
      </form>
    );
  }
}
