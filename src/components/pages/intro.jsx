import React from "react";

import Title from "./../atoms/title/title.jsx";
import Input from "./../atoms/input/input.jsx";

export default class Intro extends React.Component {
  render() {
    return (
      <div className="page">
        <Title title="MemoCards: Intro" />
        <Input name="name" type="text" placeholder="Nombre" />
      </div>
    );
  }
}
