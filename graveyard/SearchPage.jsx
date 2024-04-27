//  We will have to add some functionality to this page to allow users to specify whether they're searching for venue, event, or performer information.  The API requires a parameter to specify the type of search, so we'll need to add a dropdown or radio buttons to allow the user to select the type of search they want to perform.  We'll also need to update the handleSearch function to include the search type in the URL parameter.



import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchPage() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    // Redirect to the search results page with the query as a URL parameter
    history.push(`/search?query=${query}`);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPage;
