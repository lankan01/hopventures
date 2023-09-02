"use client"
import React from 'react';
import FormDropdown from './skeletons/formdropdown'; // Import the Dropdown component

const jobCategories = [
  "🌈 Full-stack Developer",
  "💻 Back-end Developer",
  "🎨 UI/UX Designer",
  "📱 Mobile App Developer",
  "🖥️ Front-end Developer",
  "🕵️‍♂️ Data Scientist",
  "🤖 Machine Learning Engineer",
  "🧠 AI Specialist",
  "🔒 Cybersecurity Analyst",
  "📊 Data Analyst",
  "💾 Database Administrator",
  "🚀 DevOps Engineer",
  "🔍 QA Engineer",
  "🛠️ Systems Administrator",
  "🛡️ Cloud Engineer",
  "🎮 Game Developer"
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
