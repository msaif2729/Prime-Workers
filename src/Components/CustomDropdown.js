import React, { useContext, useEffect, useState } from "react";
import dataContext from '../Context/dataContext';

const CustomDropdown = ({onSelectOption}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const context = useContext(dataContext);
  const [options,setOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    // console.log(option)
    setIsOpen(false);
    onSelectOption(option)
  };

  // const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  useEffect(()=>{
    const fetchTitle = async()=>{
      const titles = await context.getAllTitle();
      // console.log(titles[0].title)
      setOptions(titles);
    }
    fetchTitle();
  },[context.data])

  return (
    <div className="text-left w-full ">
      <button
        type="button"
        onClick={toggleDropdown}
        className="text-[var(--color7)] flex items-center justify-between w-full text-start py-2 rounded-lg font-kanit  focus:outline-none"
      >
        {selectedOption || "Select an option"}
        <svg
          className={`w-4 h-4 inline-block ml-2 ${isOpen ? '-rotate-180' : 'rotate-0 '}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full z-50 font-kanit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 ">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option.title)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
