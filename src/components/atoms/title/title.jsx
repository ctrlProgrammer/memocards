import React from "react";

export default class ConnectedTitle extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <h1>
        {this.props.title !== undefined
          ? this.props.title
          : "ERROR: no existe el titulo"}
      </h1>
    );
  }
}
