import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../store/actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    if (this.state.term.length) {
      this.props.fetchWeather(this.state.term)
    }
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <input
            className="search-bar__input"
            onChange={this.onInputChange}
            value={this.state.input}
            placeholder="Search for a city" />
          <button type="submit" className="search-bar__btn">Search</button>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
