import React from "react";

import { connect } from "react-redux";
import setPlayer from "./../../../redux/actions/player/setPlayer.js";
import getPlayer from "./../../../redux/actions/player/getPlayer.js";

import Input from "./../../atoms/input/input.jsx";
import Button from "./../../atoms/button/button.jsx";

class ConnectedForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      input: "",
      player: ""
    };
  }

  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit() {
    const { input } = this.state;
    this.props.setPlayer(input);
    this.props.getPlayer();
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
        {this.props.player}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { player: state.player };
};

const mapDispatchToProps = {
  setPlayer,
  getPlayer
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
