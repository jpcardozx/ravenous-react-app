import React from 'react';
import Business from './Business';

const businesses = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    imageSrc: 'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    imageSrc: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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