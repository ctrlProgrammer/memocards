import React from "react";

import Parag from "../../atoms/parag";
import Title from "../../atoms/title";
import "./index.css";

/**
 * Card component
 * The board reload but the card not should reload anytime
 */

export default class Card extends React.PureComponent {
  render() {
    // Validate if the active property is true
    const active = this.props.active === true ? "true" : "";
    //set other properties
    const id = this.props.id !== undefined ? this.props.id : "noid";
    const text = this.props.text !== undefined ? this.props.text : "notext";

    return (
      <div
        className={"card " + active}
        onClick={() => this.props.handleCard(id, text)}
      >
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <span>{id}</span>
            </div>
            <div className="flip-card-back">
              <Title title={<Parag text={text} />}></Title>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
