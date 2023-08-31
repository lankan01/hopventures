"use client"
import React from 'react';
import FormDropdown from './formdropdown'; // Import the Dropdown component

const locations = [
  'Singapore',
  // Add more job categories as needed
];

export default function LocationsDropdown() {
  const handleLocationSelect = (category) => {
    // Handle category selection logic here
  };

  return (
    <FormDropdown
      options={locations}
      onSelect={handleLocationSelect}
      label="Location"
    />
  );
};
