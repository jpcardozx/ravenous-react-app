// src/components/SearchBar.tsx

import React, { useState } from 'react';
import './App.css';

interface SearchBarProps {
  onSearch: (term: string, location: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (term.trim() === '' || location.trim() === '') {
      alert('Please enter both search term and location.');
      return;
    }
    onSearch(term, location);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSearch}>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={handleTermChange}
            value={term}
          />
          <input
            placeholder="Where?"
            onChange={handleLocationChange}
            value={location}
          />
        </div>
        <div className="SearchBar-submit">
          <button type="submit">Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
