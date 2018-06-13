import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import WeatherDetails from '../containers/weather-details';
import GoogleMap from '../containers/google-map';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchBar />
        <WeatherDetails />
        <GoogleMap />
      </div>
    );
  }
}

export default App;
