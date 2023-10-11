// Input.js
import React, { useState } from 'react';
import './Input.css';

const Input = ({ onInputChange }) => {
  const [values, setValues] = useState({
    hours: '',
    days: '',
    watts: '',
    count:'',
  });

  const handleInputChange = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
    onInputChange(values);
  };

  return (
    <div className='form-control'>
      <div className='hours'>
        <span>How many hours do you use per/day</span>
        <input
          className='form-control'
          type='number'
          placeholder='hours do you use per/day'
          onChange={(e) => handleInputChange('hours', e.target.value)}
        />
      </div>
      <div className='day'>
        <span>How many days do you use per/week</span>
        <input
          className='form-control'
          placeholder='days do you use per/week'
          type='number'
          onChange={(e) => handleInputChange('days', e.target.value)}
        />
      </div>
      <div className='watts'>
        <span>Watts Consumption</span>
        <input
          className='form-control'
          type='number'
          placeholder='consumtion watts of the appliance'
          onChange={(e) => handleInputChange('watts', e.target.value)}
        />
        <span>No:of products</span>
        <input
          className='form-control'
          type='number'
          placeholder='NUmber of items you have'
          onChange={(e) => handleInputChange('count', e.target.value)}
        />

      </div>
    </div>
  );
};

export default Input;
