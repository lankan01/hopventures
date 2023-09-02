"use client"
import React, { useState, useMemo } from 'react';
import FormDropdown from './skeletons/formdropdown'; // Import the Dropdown component
import countryList from 'react-select-country-list'

export default function LocationsDropdown() {
  const [value, setValue] = useState('')
  const options = useMemo(() => {
    const countryData = countryList().getData();
    const countryNames = countryData.map(country => country.label); // Assuming 'label' is the property containing the country name
    return countryNames;
  }, []);

  const handleLocationSelect = (value) => {
    // Handle category selection logic here
    setValue(value)
  };

  return (
    <FormDropdown
      options={options}
      onSelect={handleLocationSelect}
      label="Office Location"
    />
  );
};
