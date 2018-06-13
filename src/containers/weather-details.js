import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherDetails extends Component {
  render() {
    if (this.props.weather.city === undefined) {
      return null;
    }

    return (
      <div className="weather-details">
        <h2>{this.props.weather.city.name} ({this.props.weather.city.country})</h2>
        <p>{this.props.weather.list[0].weather[0].description}</p>
      </div>
    );
  }
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherDetails);
