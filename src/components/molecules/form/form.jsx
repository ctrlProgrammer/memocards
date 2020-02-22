import React from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import setPlayer from "./../../../redux/actions/player/setPlayer.js";
import getPlayer from "./../../../redux/actions/player/getPlayer.js";
import changeState from "./../../../redux/actions/game/changeState.js";

import Input from "./../../atoms/input";
import Button from "./../../atoms/button";

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
    this.props.changeState(1);
  }

  render() {
    if (this.props.game === 1) {
      return <Redirect to="/game" />;
    } else {
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
}

const mapStateToProps = state => {
  return { player: state.player, game: state.game };
};

const mapDispatchToProps = {
  setPlayer,
  getPlayer,
  changeState
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
