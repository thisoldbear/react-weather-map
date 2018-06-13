import axios from 'axios';

import { API_KEY } from '../../config';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

/// Query by user entered search term
export const fetchWeatherByCity = (city) => {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}

/// Query by coords from Google map event
export const fetchWeatherByCoords = (lat, lon) => {
  const url = `${ROOT_URL}&lat=${lat}&lon=${lon}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
