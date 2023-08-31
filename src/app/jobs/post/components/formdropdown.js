import React, { useState, useRef, useEffect } from 'react';

export default function FormDropdown ({ options, onSelect, label }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const wrapperRef = useRef(null);

  // This function helps close the dropdown when the user clicks outside of it
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

  const filteredOptions = options.filter(option =>                              // where options is an array of the options to be displayed in the dropdown
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionSelect = (option) => {
    setSearchTerm(option);
    setIsDropdownVisible(false);
    onSelect(option);
  };

  return (
    <div className="" ref={wrapperRef}>
      <div
        className="relative z-0 w-full mb-6 group"
        onFocus={() => setIsDropdownVisible(true)}
      >
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-500 peer"
          placeholder=" "
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          required
        />
        <label
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
        {isDropdownVisible && (
          <>
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className="py-2 hover:text-1o-pink cursor-pointer sm:text-sm text-xs"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
