import React from "react";
import { Redirect } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import setCards from "../../redux/actions/card/setCards";
import changeState from "../../redux/actions/game/changeState";

import Title from "../atoms/title";
import Board from "../organisms/board";

class Game extends React.Component {
  createCards() {
    var cards = [];
    var counter = 1;
    for (var count = 0; count < 5; count++) {
      const random = Math.floor(Math.random() * 1000);
      cards.push({
        text: random,
        id: counter,
        active: false,
        mutable: true
      });
      counter++;
      cards.push({
        text: random,
        id: counter,
        active: false,
        mutable: true
      });
      counter++;
    }
    return cards;
  }

  chaosCards() {
    var cards = this.createCards();
    var disordered = [];
    while (cards.length !== 0) {
      const rand = Math.floor(Math.random() * cards.length);
      disordered.push(cards[rand]);
      cards.splice(rand, 1);
    }
    this.props.setCards(disordered);
    return disordered;
  }

  render() {
    if (this.props.game === 0) {
      return <Redirect to="/" />;
    } else if (this.props.game === 2) {
      return <Redirect to="/end" />;
    } else {
      return (
        <div className="game">
          <Title title={"Juega " + this.props.player + "!"} />
          <Board cards={this.chaosCards()} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    player: state.player,
    game: state.game
  };
};

const mapDispatchToProps = {
  setCards,
  changeState
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
