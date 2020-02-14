import React from "react";

export default class Parag extends React.PureComponent {
  constructor(props) {
    super(props);
    this.defProps = {
      text: "notext"
    };
  }

  render() {
    return (
      <p>
        {this.props.text !== undefined ? this.props.text : this.defProps.text}
      </p>
    );
  }
}
