import React, {Component} from "react";
import {Tag} from 'antd';
import 'antd/dist/antd.css';
import 'bulma/css/bulma.css';

import './EventCard.css';

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

export class EventCard extends Component {
  // Setting our component's initial state
  state = {};

  render() {
    return (
      <tr className="event-card">
      <td>
        <div className="card-div">
          <div className="columns">
            <div className="column is-1 main-date">
              <p className="month">Dec</p>
              <p className="day">12</p>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column bands">
                  <p>Betty Rage, Scattered Fall, Thought Riot</p>
                </div>
              </div>
              <div className="columns">
                <div className="column date">
                  <p>Friday, December 12 7:00 pm</p>
                </div>
              </div>
              <div className="columns">
                <div className="column venue">
                  <p>Seifert Center - 128 W Benjamin Holt Dr, Stockton, CA</p>
                </div>
              </div>
              <div className="columns">
                <div className="column genre">
                  <Tag>Punk</Tag>
                  <Tag>Hardcore</Tag>
                </div>
              </div>
            </div>
          </div>

        </div>
      </td>
    </tr>
  );
  }
}
