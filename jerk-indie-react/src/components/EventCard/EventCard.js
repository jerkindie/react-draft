import React, { Component } from "react";
import { Tag } from 'antd';
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
  state = {
  };




  render() {
    return (

      <tr className="event-card">
        <td>
          <p>Aug 15</p>
        </td>
        <td>
          <p>7pm</p>
        </td>
        <td>
          <p>Betty Rage, Scattered Fall, Thought Riot</p>
        </td>
        <td>
          <p>Seifert Center</p>
        </td>
        <td>
          <Tag>Punk</Tag>
        </td>
      </tr>

    );
  }
}
