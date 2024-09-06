// src/components/App.tsx

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import Header from './Header';
import { BusinessType, FoursquarePlace } from '../types';  // Importa o arquivo types.ts

const App: React.FC = () => {
  const [businesses, setBusinesses] = useState<BusinessType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchFoursquarePlaces = async (term: string, location: string) => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_FOURSQUARE_API_KEY;
      const response = await axios.get<{ results: FoursquarePlace[] }>(
        'https://api.foursquare.com/v3/places/search',
        {
          headers: {
            Authorization: apiKey,
          },
          params: {
            query: term,
            near: location,
            limit: 10,
          },
        }
      );

      const formattedBusinesses: BusinessType[] = response.data.results.map((place) => {
        let imageSrc = '';
        if (place.photos && place.photos.length > 0) {
          const photo = place.photos[0];
          imageSrc = `${photo.prefix}original${photo.suffix}`;
        }

        return {
          imageSrc,
          name: place.name,
          address: place.location.address || 'Address not available',
          city: place.location.locality || 'City not available',
          state: place.location.region || 'State not available',
          zipCode: place.location.postcode || 'Zip Code not available',
          country: place.location.country || 'Country not available',
          category: place.categories.length > 0 ? place.categories[0].name : 'N/A',
          rating: place.rating || 'N/A',
          reviewCount: place.stats?.total_ratings || 0,
        };
      });

      setBusinesses(formattedBusinesses);
    } catch (err) {
      console.error('Error fetching data from Foursquare API:', err);
      setError('Failed to fetch businesses.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={searchFoursquarePlaces} />
      <h1>Local Businesses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BusinessList businesses={businesses} />
      )}
    </div>
  );
};

export default App;
