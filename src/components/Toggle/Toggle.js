import './Toggle.css';
import React from 'react';

function Toggle() {
  return (
    <label className='toggle'>
      <input className='toggle__input' type='checkbox' />
      <span className='toggle__span'></span>
    </label>
  );
}

export default Toggle;
