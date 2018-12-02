import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import 'bulma/css/bulma.css';

import './Menu.css';


function handleChange(value) {
  console.log(`selected ${value}`);
}


export class Menu extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="Menu">
        <div className="left-menu">
          <div className="logo-container">
            <img className="main-logo" src={logo} />
          </div>
          <div className="top-menu">
            <Link to={"/"}><p>events........</p></Link>
            <Link to={"/addevent/"}><p>add event.....</p></Link>

            <p>about.........</p>
          </div>
        </div>
      </div>
    );
  }
}
