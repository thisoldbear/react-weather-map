import React, { Component } from 'react';
import { connect } from 'react-redux';

class GoogleMap extends Component {
  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: 51.75,
        lng: -3.38,
      },
    });
  };

  componentDidUpdate(prevProps) {
    const {lat, lon} = this.props.weather.city.coord;
    const latLng = new window.google.maps.LatLng(lat, lon);
    this.map.panTo(latLng);
  }

  render() {
    return <div className="map" ref="map" />
  }
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(GoogleMap);
