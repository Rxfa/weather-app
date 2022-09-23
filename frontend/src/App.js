import {useState, useEffect} from 'react';
import Form from './components/Form';
import Profile from './components/Profile';
import searchService from './services/searchService';

const App = () =>{
  const api = navigator.geolocation;
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (!api) {
      console.log('Geolocation API is not avaliable in your browser!');
    } else {
      api.getCurrentPosition((location) => {
        const {coords} = location;
        setLat(coords.latitude);
        setLon(coords.longitude);
        console.log(`lat - ${lat}\nlong - ${lon}`);
      }, (error) => {
        console.log('Error!\nCouldn\'t get your current position');
      });
    }
  };

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
          console.log(`lat - ${lat}\nlong - ${lon}`);
          searchService.getWeather(lat, lon)
              .then((response) => {
                const profile = {
                  name: locationName,
                  unit: response.daily_units.temperature_2m_min,
                  yesterday: {
                    date: response.daily.time[0],
                    min_temp: response.daily.temperature_2m_min[0],
                    max_temp: response.daily.temperature_2m_max[0],
                  },
                  today: {
                    date: response.current_weather.time,
                    min_temp: response.daily.temperature_2m_min[1],
                    max_temp: response.daily.temperature_2m_max[1],
                    temp: response.current_weather.temperature,
                    wind_speed: response.current_weather.windspeed,
                    wind_direction: response.current_weather.winddirection,
                  },
                  tomorrow: {
                    date: response.daily.time[2],
                    min_temp: response.daily.temperature_2m_min[2],
                    max_temp: response.daily.temperature_2m_max[2],
                  },
                };
                setResult(profile);
              });
        });
  };

  return (
    <div>
      <h1>Weather app</h1>
      <Form
        formSubmit={makeSearch}
        inputChange={handleSearch}
        inputValue={search}
      />
      {result.length !== 0 && <Profile src={result} />}
    </div>
  );
};

export default App;
