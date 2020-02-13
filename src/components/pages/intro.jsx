import React from "react";

import Title from "./../atoms/title/title.jsx";
import Form from "./../molecules/form/form.jsx";

export default class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.form = {
      input: {
        name: "name",
        type: "text",
        placeholder: "Nombre"
      },
      button: {
        text: "Jugar"
      }
    };
  }

  render() {
    return (
      <div className="page">
        <Title title="MemoCards: Intro" />
        <Form input={this.form.input} button={this.form.button} />
      </div>
    );
  }
}
