import axios from 'axios';

const getLocation = (query) => {
  const request = axios
      .get(
          `https://api.geoapify.com/v1/geocode/search?text=${query}&apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}`,
      );
  return request.then((response) => {
    return response.data.features[0].properties;
  });
};

const getWeather = (lat, lon) => {
  const request = axios
      .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&past_days=1`,
      );
  return request.then((response) => {
    return response.data;
  });
};

export default {getLocation, getWeather};
