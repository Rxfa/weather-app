import { React, useState } from 'react';
import searchService from './services/searchService';

function App() {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`query: ${event.target.value}`);
    setSearch(event.target.value);
  };

  const makeSearch = (event) => {
    event.preventDefault();
    console.log(`You searched for: ${search}`);
    try {
      searchService.getLocation(search);
    } catch (exception) {
      console.log(exception);
      setTimeout(() => {}, 5000);
    }
  };

  return (
    <div>
      <h1>Weather app</h1>
      <form onSubmit={makeSearch}>
        query
        <input
          type="text"
          name="query"
          value={search}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
