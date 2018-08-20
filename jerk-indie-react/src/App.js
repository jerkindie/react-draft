import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Switch>
            <Route exact path="/" component={Main} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
