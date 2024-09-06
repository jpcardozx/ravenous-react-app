// src/components/BusinessList.tsx

import React from 'react';
import Business from './Business';
import { BusinessType } from '../types';
import './App.css';

interface BusinessListProps {
  businesses: BusinessType[];
}

const BusinessList: React.FC<BusinessListProps> = ({ businesses }) => {
  return (
    <div className="business-list">
      {businesses.length === 0 ? (
        <p>No businesses found.</p>
      ) : (
        businesses.map((business, index) => (
          <Business key={index} business={business} />
        ))
      )}
    </div>
  );
};

export default BusinessList;
