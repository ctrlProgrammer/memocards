import React from "react";

export default class Title extends React.PureComponent {
  render() {
    return (
      <h1>
        {this.props.title !== undefined
          ? this.props.title
          : "ERROR: no existe el titulo"}
      </h1>
    );
  }
}
