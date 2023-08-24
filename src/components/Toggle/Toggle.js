import './Toggle.css';
import React from 'react';

function Toggle(props) {
  return (
    <label className='toggle' >
      <input
        className='toggle__input'
        type='checkbox'
        onChange={props.handleShortMoviesChange}
        checked={props.isToggle}
      />
      <span className='toggle__span'></span>
    </label>
  );
}

export default Toggle;
