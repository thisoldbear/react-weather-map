import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherDetails extends Component {
  render() {
    if (!this.props.weather[0]) {
      return null;
    }

    return (
      <div className="weather-details">
        <h2>{this.props.weather[0].city.name} ({this.props.weather[0].city.country})</h2>
        <p>{this.props.weather[0].list[0].weather[0].description}</p>
      </div>
    );
  }
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherDetails);
