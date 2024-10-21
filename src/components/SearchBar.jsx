import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [dietType, setDietType] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query, dietType);
      setQuery('');
      setDietType('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
    </div>
  );
};

export default SearchBar;