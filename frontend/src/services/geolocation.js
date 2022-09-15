import {useState} from 'react';

const api = navigator.geolocation;

const getUserLocation = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  if (!api) {
    console.log('Geolocation API is not avaliable in your browser!');
  } else {
    api.getCurrentPosition((location) => {
      const {coords} = location;
      setLat(coords.latitude);
      setLong(coords.longitude);
    }, (error) => {
      console.log('Error!\nCouldn\'t get your current position');
    });
  }
};

export default {getUserLocation};
