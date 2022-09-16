import {useState, useEffect} from 'react';
import Form from './components/Form';
import Profile from './components/Profile';
import searchService from './services/searchService';

const App = () =>{
  const api = navigator.geolocation;
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
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
        setLong(coords.longitude);
        console.log(`lat - ${lat}\nlong - ${long}`);
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
          console.log(`new -${response}`);
          const cityObj = {
            city: response.request.query,
            temp: response.current.temperature,
            feelslike: response.current.feelslike,
            icon: response.current.weather_icons,
            description: response.current.weather_descriptions,
          };
          setResult(cityObj);
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
