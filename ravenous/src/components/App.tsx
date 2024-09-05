import React from 'react';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar'
import Header from './Header'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <h1>Local Businesses</h1>
      <BusinessList />
    </div>
  );
};

export default App;