// src/components/Business.tsx

import React from 'react';
import { BusinessType } from '../types';
import './App.css';

interface BusinessProps {
  business: BusinessType;
}

const Business: React.FC<BusinessProps> = ({ business }) => {
  return (
    <div className="business">
      <div className="image-container">
        {business.imageSrc ? (
          <img src={business.imageSrc} alt={business.name} />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>
      <h2>{business.name}</h2>
      <div className="business-information">
        <div className="business-address">
          <p>{business.address}</p>
          <p>
            {business.city}, {business.state} {business.zipCode}
          </p>
          <p>{business.country}</p>
        </div>
        <div className="business-reviews">
          <h3>Category: {business.category}</h3>
          <h3 className="rating">Rating: {business.rating} ⭐</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
