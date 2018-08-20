import React from 'react';
import { Input } from 'antd';
import "./GooglePlaces.css";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
// import { address } from 'ip';

const Search = Input.Search;

const searchOptions = {
  types: ['(regions)']
}

export class GooglePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: '',
    });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log('error', error); // eslint-disable-line no-console
      });
  };;

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  handleSearchClick = () => {
    if (this.state.address) {
      let selectedAddress = this.state.address
      let urlParams = selectedAddress.split(",")

      let city = urlParams[0]
      let state = urlParams[1].replace(/ /g, '')

      console.log("City: ", city)
      console.log("State: ", state)
      let site = window.location.href
      window.location.href = site + "results?city=" + city + "&state=" + state;

    }
  }

  handleError = (status, clearSuggestions) => {
    console.log('Error from Google Maps API', status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {

    const {
      address,
      // errorMessage,
      // latitude,
      // longitude,
      // isGeocoding,
    } = this.state;

    return (
      <PlacesAutocomplete
        onChange={this.handleChange}
        value={address}
        onSelect={this.handleSelect}
        onError={this.handleError}
        searchOptions={searchOptions}

      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="location-input-div">

            <div className="search-input">
              <Search
                {...getInputProps({
                  placeholder: 'Enter City or Zip',
                  className: 'location-search-input',
                })}
              />

            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
