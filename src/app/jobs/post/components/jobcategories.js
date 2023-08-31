"use client"
import React from 'react';
import FormDropdown from './formdropdown'; // Import the Dropdown component

const jobCategories = [
  'Cool Developer',
  'Back-end Developer',
  'UX Designer',
  'Operations',
  // Add more job categories as needed
];

export default function JobCategoryDropdown() {
  const handleCategorySelect = (category) => {
    // Handle category selection logic here
  };

  return (
    <FormDropdown
      options={jobCategories}
      onSelect={handleCategorySelect}
      label="Job Category"
    />
  );
};
