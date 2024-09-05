import React from 'react';
import Business from './Business';

const businesses = [
  {
    imageSrc: '/api/placeholder/400/300',
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Bordertown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90
  },
  {
    imageSrc: '/api/placeholder/400/300',
    name: "Burger Queen",
    address: "505 Patty Avenue",
    city: "Burgerville",
    state: "CA",
    zipCode: "90210",
    category: "American",
    rating: 4.3,
    reviewCount: 120
  },
  {
    imageSrc: '/api/placeholder/400/300',
    name: "Sushi Paradise",
    address: "789 Wasabi Lane",
    city: "Rolltown",
    state: "WA",
    zipCode: "98101",
    category: "Japanese",
    rating: 4.8,
    reviewCount: 200
  }
  // You can add more fake businesses here as needed
];

const BusinessList: React.FC = () => {
  return (
    <div className="business-list">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;