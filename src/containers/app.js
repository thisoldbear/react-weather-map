import React, { Component } from 'react';

import SearchBar from './search-bar';
import WeatherDetails from './weather-details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherDetails />
      </div>
    );
  }
}

export default App;
