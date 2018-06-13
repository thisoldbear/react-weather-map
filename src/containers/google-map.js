import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherByCoords } from '../store/actions';
class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: 51.75,
        lng: -3.38,
      },
    });

    window.google.maps.event.addListener(this.map, 'click', event => {
      const {lat, lng} = event.latLng
      const latLng = new window.google.maps.LatLng(lat(), lng());
      this.props.fetchWeatherByCoords(lat(), lng());
    });
  };

  componentDidUpdate() {
    const {lat, lon} = this.props.weather.city.coord;
    const latLng = new window.google.maps.LatLng(lat, lon);
    this.map.panTo(latLng);
  }

  render() {
    return <div className={this.state.loading ? 'map loading' : 'map'} ref="map" />
  }
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeatherByCoords }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
