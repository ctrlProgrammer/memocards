import React from "react";
import { connect } from "react-redux";
import { separateTime } from "../../utils/time";
import setTime from "../../../redux/actions/time/setTime";

class ConnectedTimer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      var time = this.state.time;
      this.setState({ time: ++time });
      this.props.setTime(this.state.time);
    }, 1000);
  }

  render() {
    return <span className="time">{separateTime(this.state.time)}</span>;
  }
}

const mapDispatchToProps = {
  setTime
};

export default connect(null, mapDispatchToProps)(ConnectedTimer);
