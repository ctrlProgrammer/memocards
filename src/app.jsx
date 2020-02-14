import React from "react";
import Store from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import pages
import Intro from "./components/pages/intro.jsx";
import Game from "./components/pages/game.jsx";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="game-container">
          <Router>
            <Switch>
              <Route exact path="/" component={Intro}></Route>
              <Route exact path="/game" component={Game}></Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}
