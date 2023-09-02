import React, { useState, useRef, useEffect } from 'react';

export default function FormDropdown({ options, onSelect, label }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // Add highlighted index state
  const wrapperRef = useRef(null);
  const dropdownRef = useRef(null); // Add dropdown reference

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Add keyboard navigation logic
  useEffect(() => {
    function handleKeyDown(event) {
      if (isDropdownVisible) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          setHighlightedIndex(prevIndex =>
            prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
          );
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          setHighlightedIndex(prevIndex =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
        } else if (event.key === 'Enter') {
          event.preventDefault();
          if (highlightedIndex !== -1) {
            handleOptionSelect(filteredOptions[highlightedIndex]);
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownVisible, highlightedIndex]); // Update dependencies

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionSelect = (option) => {
    setSearchTerm(option);
    setIsDropdownVisible(false);
    onSelect(option);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="relative w-full mb-6 group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-500 peer"
          placeholder=" "
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          required
          onFocus={() => setIsDropdownVisible(true)}
        />
        <label
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
        {isDropdownVisible && (
          <div
            ref={dropdownRef} // Assign the ref to the dropdown container
            className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg rounded-md overflow-y-auto max-h-40"
          >
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className={`py-2 hover:text-pink-500 cursor-pointer sm:text-sm text-xs px-4 ${
                  highlightedIndex === index ? 'bg-gray-100 dark:bg-gray-800' : ''
                }`} // Add highlighted background color
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
