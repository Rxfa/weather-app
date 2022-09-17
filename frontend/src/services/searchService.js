import axios from 'axios';

const baseUrl = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=`;

const getLocation = (query) => {
  console.log(`axios says you searched for: ${query}`);
  const request = axios
      .get(
          `https://api.geoapify.com/v1/geocode/search?text=${query}&apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}`,
      );
  return request.then((response) => {
    const coordsObj = {
      lat: response.data.features[0].properties.lat,
      long: response.data.features[0].properties.lon,
    };
    return response.data.features[0].properties;
  });
};

const getWeather = (lat, lon) => {
  const request = axios
      .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&past_days=1`);
  return request.then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export default {getLocation, getWeather};
