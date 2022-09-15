import axios from 'axios';

const baseUrl = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=`;

const getLocation = (location) => {
  console.log(`axios says you searched for: ${location}`);
  const request = axios.get(`${baseUrl}${location}`);
  return request.then((response) => {
    return response.data;
  });
};

export default {getLocation};
