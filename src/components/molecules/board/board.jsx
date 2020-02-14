import React from "react";
import Card from "./../../atoms/card/card";

import "./board.css";

export default class Board extends React.Component {
  render() {
    return (
      <div className="board">
        {this.props.cards !== undefined && this.props.cards.length > 0 ? (
          this.props.cards.map((card, index) => (
            <Card
              active={card.active}
              key={index}
              id={index}
              text={card.text}
            />
          ))
        ) : (
          <span>No esta bien configurado</span>
        )}
      </div>
    );
  }
}
