import React from "react";

import Title from "./../atoms/title/title";

export default class Intro extends React.Component {
  render() {
    return (
      <div className="page">
        <Title title="MemoCards: Terminaste el juego." />
        <Title title="Registros: Ultimos puntajes" />
      </div>
    );
  }
}
