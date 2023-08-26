"use client"

import React, { useState, useRef, useEffect } from 'react';

const jobCategories = [
  'Front-end Developer',
  'Back-end Developer',
  'UX Designer',
  'Operations',
  // Add more job categories as needed
];

const JobCategorySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCategories = jobCategories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategorySelect = (category) => {
    setSearchTerm(category);
    setIsDropdownVisible(false); // Hide the dropdown after selecting a category
  };

  return (
    <div className="" ref={wrapperRef}>
      <div className="relative z-0 sm:w-3/4 w-full mb-6 group"
        onFocus={() => setIsDropdownVisible(true)}
      >
        <input
          type="text"
          name="job_category_search"
          id="job_category_search"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-500 peer"
          placeholder=" "
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          required
        />
        <label
          htmlFor="job_category_search"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Job Category
        </label>
        {isDropdownVisible && (
          <>
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                className="py-2 hover:text-1o-pink cursor-pointer sm:text-sm text-xs"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default JobCategorySearch;
