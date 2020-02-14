import React from "react";
import { connect } from "react-redux";

import Title from "./../atoms/title/title";
import Board from "./../molecules/board/board";

class Game extends React.Component {
  createCards() {
    var cards = [];
    for (var count = 0; count < 5; count++) {
      const random = Math.floor(Math.random() * 100);
      const obj = {
        text: random,
        active: false
      };
      cards.push(obj);
      cards.push(obj);
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
    return disordered;
  }

  render() {
    return (
      <div className="game">
        <Title title={"Juega " + this.props.player + "!"} />
        <Board cards={this.chaosCards()} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps)(Game);
