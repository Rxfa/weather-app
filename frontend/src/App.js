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
          console.log(`first res - ${response}`);
          setLat(response.lat);
          setLon(response.lon);
          console.log(`lat - ${lat}\nlong - ${lon}`);
          searchService.getWeather(lat, lon)
              .then((response) => {
                console.log(`second res - ${response}`);
                const profile = {};
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
