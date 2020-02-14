import React from "react";
import Parag from "./../parag/parag";

import "./card.css";

export default class Card extends React.PureComponent {
  render() {
    return (
      <div className="card">
        <Parag text={this.props.text} />
      </div>
    );
  }
}
