import React, { useState } from 'react';

const sortOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

const SearchBar: React.FC = () => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const getSortByClass = (sortByOption: string) => {
    if (sortBy === sortByOption) {
      return 'active';
    }
    return '';
  };

  const handleSortByChange = (sortByOption: string) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    // Here you would typically call a function to interact with the Yelp API
  };

  const renderSortByOptions = () => {
    return Object.entries(sortOptions).map(([key, value]) => {
      return (
        <li
          key={value}
          className={getSortByClass(value)}
          onClick={() => handleSortByChange(value)}
        >
          {key}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
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