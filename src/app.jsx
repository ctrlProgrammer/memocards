import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import pages
import Intro from "./components/pages/intro.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div className="game-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Intro}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
