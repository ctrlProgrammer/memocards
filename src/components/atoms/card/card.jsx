import React from "react";
import Parag from "./../parag/parag";

import "./card.css";

export default class Card extends React.PureComponent {
  constructor(props) {
    super(props);

    this.cardClick = this.cardClick.bind(this);
  }
  cardClick(e) {
    console.log(this.props);
  }

  render() {
    var cardClass = "card ";
    cardClass +=
      this.props.active !== undefined && this.props.active === true
        ? "true"
        : "";

    return (
      <div className={cardClass} onClick={this.cardClick} ref={this.card}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <span>{this.props.id}</span>
            </div>
            <div className="flip-card-back">
              <h1>
                <Parag text={this.props.text} />
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
