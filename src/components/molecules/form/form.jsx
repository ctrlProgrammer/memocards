import React from "react";

import { connect } from "react-redux";
import { setPlayer } from "./../../../redux/actions/setPlayer.js";

import Input from "./../../atoms/input/input.jsx";
import Button from "./../../atoms/button/button.jsx";

function mapDispatchToProps(dispatch) {
  return { setPlayer: player => dispatch(setPlayer(player)) };
}

class ConnectedForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      input: ""
    };
  }

  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    const { input } = this.state;
    this.props.setPlayer(input);
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
        <Button onClick={this.handleSubmit} text={this.props.button.text} />
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
