// SearchResultPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
require('dotenv').config();

function SearchResultPage() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const fetchData = async () => {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/eventsh.json?=${query}&classificationName=comedy&apikey=${process.env.APIKEY}`);
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [location.search]);

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultPage;
