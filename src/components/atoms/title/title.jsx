import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { player: state.player };
};

class ConnectedTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <h1>
        {this.props.title !== undefined
          ? this.props.title
          : "ERROR: no existe el titulo"}
        {this.props.player}
      </h1>
    );
  }
}

const Title = connect(mapStateToProps)(ConnectedTitle);

export default Title;
