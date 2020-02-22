import React from "react";

// Redux
import { connect } from "react-redux";
import closeAll from "../../../redux/actions/card/closeAll";
import setNewPoint from "../../../redux/actions/point/setNew";
import changeStatus from "../../../redux/actions/card/changeStatus";
import setInmutable from "../../../redux/actions/card/setInmutable";

import Timer from "../../atoms/timer";
import Card from "../../molecules/card";

import { Redirect } from "react-router-dom";
import "./index.css";

class ConnectedBoard extends React.Component {
  constructor(props) {
    super(props);
    this.cover = React.createRef();
    this.handleCard = this.handleCard.bind(this);
    this.toggleCover = this.toggleCover.bind(this);

    this.state = { response: "Empieza a jugar", win: false };
  }

  handleCard(id) {
    if (this.state.win === false) {
      const cards = this.props.cards.cards;
      var active = [];

      this.props.changeStatus(true, id);
      cards.forEach(card => {
        if (card.active === true && card.mutable === true) active.push(card);
      });

      if (active.length === 2) {
        this.forceUpdate();
        this.toggleCover();
        if (this.validateSameCards(active[0], active[1])) {
          this.props.setInmutable(active[0].id);
          this.props.setInmutable(active[1].id);
          this.setState({ response: "Encontraste el par." });
          setTimeout(() => {
            //this.forceUpdate();
            this.toggleCover();
            this.validateAllCards();
          }, 1000);
        } else {
          setTimeout(() => {
            this.props.closeAll();
            //this.forceUpdate();
            this.setState({ response: "Fallaste." });
            this.toggleCover();
          }, 1000);
        }
      } else {
        this.setState({ response: "Busca el par" });
        //this.forceUpdate();
      }
    }
  }

  validateAllCards() {
    const cards = this.props.cards.cards;
    var count = 0;
    cards.forEach(card => {
      if (card.mutable === false) count++;
    });
    if (count >= cards.length - 1) {
      this.props.setNewPoint(this.props.player, this.props.timer);
      this.setState({ response: "Ganaste", win: true });
    }
  }

  validateSameCards(cardOne, cardTwo) {
    return cardOne.text === cardTwo.text ? true : false;
  }

  toggleCover() {
    const cover = this.cover.current;
    cover.classList.contains("active")
      ? cover.classList.remove("active")
      : cover.classList.add("active");
  }

  render() {
    if (this.state.win === true) {
      return <Redirect to="/end" />;
    } else {
      return (
        <div className="board">
          {this.props.cards.cards !== undefined &&
          this.props.cards.cards.length > 0 ? (
            this.props.cards.cards.map(card => {
              return (
                <Card
                  handleCard={this.handleCard}
                  key={card.id}
                  active={card.active}
                  id={card.id}
                  text={card.text}
                />
              );
            })
          ) : (
            <span>No esta bien configurado</span>
          )}
          <div ref={this.cover} className="cover"></div>
          <div className="info">
            <span className="response">{this.state.response}</span>
            <Timer />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    player: state.player,
    timer: state.timer
  };
};

const mapDispatchToProps = {
  closeAll,
  changeStatus,
  setInmutable,
  setNewPoint
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedBoard);
