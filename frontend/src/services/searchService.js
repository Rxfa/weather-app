import axios from 'axios';

const getLocation = (query) => {
  console.log(`axios says you searched for: ${query}`);
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
      .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&past_days=1`);
  return request.then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const getFlag = (country) => {
  const request = axios.get('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json');
  return request.then((response) => {
    const target = () =>{
      response.find((i) => i.name === country);
    };
    return target.image;
  });
};

export default {getLocation, getWeather, getFlag};
