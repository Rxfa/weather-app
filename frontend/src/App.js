import {useState} from 'react';
import Form from './components/Form';
import Profile from './components/Profile';
import searchService from './services/searchService';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const App = () =>{
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [locationName, setLocationName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [countryFlag, setCountryFlag] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`query: ${event.target.value}`);
    setSearch(event.target.value);
  };

  const makeSearch = (event) => {
    event.preventDefault();
    console.log(`You searched for: ${search}`);
    searchService.getLocation(search)
        .then((response) => {
          setLat(response.lat);
          setLon(response.lon);
          setLocationName(response.formatted);
          setCountryName(response.country);
          console.log(`lat - ${lat}\nlong - ${lon}`);
          console.log(`country flag url - ${countryFlag}`);

          if (lon && lat) {
            searchService.getWeather(lat, lon)
                .then((response) => {
                  const profile = {
                    name: locationName,
                    country: countryName,
                    country_flag: countryFlag,
                    unit: response.daily_units.temperature_2m_min,
                    timezone: response.timezone,
                    today: {
                      date: response.current_weather.time,
                      min_temp: response.daily.temperature_2m_min[1],
                      max_temp: response.daily.temperature_2m_max[1],
                      temp: response.current_weather.temperature,
                      wind_speed: response.current_weather.windspeed,
                      wind_direction: response.current_weather.winddirection,
                    },
                  };
                  setResult(profile);
                });
          }
        });
  };

  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
    >
      <Typography variant='h1' component='h1'>Weather app</Typography>
      <Box>
        <Form
          formSubmit={makeSearch}
          inputChange={handleSearch}
          inputValue={search}
        />
        {result.length !== 0 && <Profile src={result} />}
      </Box>
    </Box>
  );
};

export default App;
