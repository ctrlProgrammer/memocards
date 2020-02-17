import React from "react";
import { connect } from "react-redux";
import Title from "./../atoms/title/title";

class ConnectedIntro extends React.Component {
  render() {
    console.log(this.props.points);
    return (
      <div className="page">
        <Title title="MemoCards: Terminaste el juego." />
        <Title title="Registros: Ultimos puntajes" />
        <div>
          <h1>Ultimos puntajes</h1>
          <ul>
            {this.props.points.map(point => {
              return (
                <li>
                  user: {point.player}, points: {point.point}, date:{" "}
                  {point.date.getTime()}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { points: state.points };
};

export default connect(mapStateToProps)(ConnectedIntro);
