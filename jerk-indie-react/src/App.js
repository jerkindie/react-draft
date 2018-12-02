import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import AddEvent from "./pages/AddEvent";
import { Menu } from "./components/Menu";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <div>

          <Menu />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/addevent/" component={AddEvent} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
