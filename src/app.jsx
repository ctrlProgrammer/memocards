import React from "react";

import Title from "./components/atoms/title/title.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div className="game-container">
        <Title title="MemoCards" />
      </div>
    );
  }
}
