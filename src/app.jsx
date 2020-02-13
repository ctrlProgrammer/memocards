import React from "react";

import Title from "./components/atoms/title/title.jsx";
import Input from "./components/atoms/input/input.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div className="game-container">
        <Title title="MemoCards" />
        <Input />
      </div>
    );
  }
}
