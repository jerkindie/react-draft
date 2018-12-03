import React, { Component } from "react";
import 'bulma/css/bulma.css';
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

        <div className="container main-container">

          <SearchBar />

          <div className="card-container">
            <table className="card-table">


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
