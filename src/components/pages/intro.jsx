import React from "react";

import Title from "./../atoms/title/title.jsx";
import Form from "./../molecules/form/form.jsx";

export default class Intro extends React.Component {
  render() {
    return (
      <div className="page">
        <Title title="MemoCards: Intro" />
        <Form />
      </div>
    );
  }
}
