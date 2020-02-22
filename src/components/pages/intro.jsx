import React from "react";

import Error from "../atoms/error";
import Title from "../atoms/title";
import { Redirect } from "react-router-dom";
import Form from "../molecules/form/form.jsx";

//redux
import { connect } from "react-redux";
import setPlayer from "../../redux/actions/player/setPlayer";

class Intro extends React.Component {
  constructor(props) {
    super(props);

    //State
    this.state = {
      playerSet: false,
      error: ""
    };

    // Form properties
    this.form = {
      input: {
        name: "name",
        type: "text",
        placeholder: "Nombre"
      },
      button: {
        text: "Jugar"
      }
    };

    //bind all functions
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault();

    const userName = e.currentTarget[0].value;

    if (userName) {
      this.props.setPlayer(userName);
      this.setState({ playerSet: true });
    } else {
      this.setState({ error: "Debes colocar tu nombre" });
    }
  }

  render() {
    if (this.state.playerSet) {
      return <Redirect to="/game" />;
    } else {
      return (
        <div className="page">
          <Title title="MemoCards: Intro" />
          <Form
            handleInput={this.handleInput}
            input={this.form.input}
            button={this.form.button}
          />
          {this.state.error !== "" ? <Error text={this.state.error} /> : ""}
        </div>
      );
    }
  }
}

const mapDispatchToProps = {
  setPlayer
};

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
