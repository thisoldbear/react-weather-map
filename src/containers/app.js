import React, { Component } from 'react';

import SearchBar from './search-bar';
import WeatherDetails from './weather-details';
import GoogleMap from './google-map';

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
