import React, { useState } from 'react';

const RadioButtonList = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="radio"
              name="radioGroup"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleChange}
            />
            {option.label}
          </label>
        </div>
      ))}
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default RadioButtonList;
