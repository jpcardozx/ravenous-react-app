import React from 'react';

interface BusinessType {
  imageSrc: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  category: string;
  rating: number;
  reviewCount: number;
}

interface BusinessProps {
  business: BusinessType;
}

const Business: React.FC<BusinessProps> = ({ business }) => {
  const { imageSrc, name, address, city, state, zipCode, category, rating, reviewCount } = business;

  return (
    <div className="business">
      <div className="image-container">
        <img src={imageSrc} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className="business-information">
        <div className="business-address">
          <p>{address}</p>
          <p>{city}, {state} {zipCode}</p>
        </div>
        <div className="business-reviews">
          <h3>{category}</h3>
          <h3 className="rating">{rating} stars</h3>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;