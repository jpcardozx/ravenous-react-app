// src/types.ts

export interface FoursquarePlace {
    fsq_id: string;
    name: string;
    location: {
      address: string;
      locality: string;
      region: string;
      postcode: string;
      country: string;
    };
    categories: {
      id: string;
      name: string;
      icon: {
        prefix: string;
        suffix: string;
      };
    }[];
    rating?: number;
    stats?: {
      total_ratings: number;
    };
    photos?: {
      prefix: string;
      suffix: string;
      width: number;
      height: number;
    }[];
  }
  
  export interface BusinessType {
    imageSrc: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    category: string;
    rating: string | number;
    reviewCount: number;
  }
  