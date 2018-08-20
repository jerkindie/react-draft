import React, { Component } from "react";
import 'bulma/css/bulma.css';
import logo from '../../images/logo.png';
import { SearchBar } from "../../components/SearchBar";
import { EventCard } from "../../components/EventCard";
import './Main.css';

class Main extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="Main">
        <div className="container">
          <div className="logo-container">
            <img className="main-logo" src={logo} />
          </div>
          <SearchBar />
          <div className="card-container">
            <table className="card-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Bands</th>
                  <th>Location</th>
                  <th>Genres</th>

                </tr>
              </thead>

              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />


            </table>

          </div>
        </div>

      </div>
    );
  }
}

export default Main;
