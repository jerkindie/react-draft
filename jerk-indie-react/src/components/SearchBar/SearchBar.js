import React, { Component } from "react";
import { Input, Select } from 'antd';
import { GooglePlaces } from "../GooglePlaces";
import 'antd/lib/input/style/index.css';
import 'antd/dist/antd.css';
import 'bulma/css/bulma.css';

import './SearchBar.css';

const Search = Input.Search;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}


export class SearchBar extends Component {
  // Setting our component's initial state
  state = {
  };




  render() {
    return (
      <div className="SearchBar">
        <div className="columns search-form">
          <div className="column is-two-thirds">
            <GooglePlaces/>
          </div>
          <div className="column">
            <Select className="distance-select" defaultValue="10" onChange={handleChange}>
              <Option value="10">10 Miles</Option>
              <Option value="20">20 Miles</Option>
              <Option value="30">30 Miles</Option>
              <Option value="40">40 Miles</Option>
            </Select>
          </div>
          <div className="column">
            <Select className="genre-select" defaultValue="All Genres" onChange={handleChange}>
              <Option value="All Genres">All Genres</Option>
              <Option value="Rock">Rock</Option>
              <Option value="Pop">Pop</Option>
              <Option value="Indie">Indie</Option>
              <Option value="Hip Hop">Hip Hop</Option>
              <Option value="Punk">Punk</Option>
              <Option value="Metal">Metal</Option>
            </Select>
          </div>
        </div>

      </div>
    );
  }
}
