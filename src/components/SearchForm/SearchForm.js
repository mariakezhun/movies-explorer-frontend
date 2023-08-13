import './SearchForm.css';
import React from 'react';
import searchIcon from '../../images/search-icon.svg';
import Toggle from '../Toggle/Toggle';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__rectangle'>
        <div className='search-form__search-container'>
          <form className='search-form__form'>
          <img
            className='search-form__search-icon'
            src={searchIcon}
            alt='Иконка поиска'
          />
          <input
            className='search-form__search-input'
            type='text'
            name='search-form'
            placeholder='Фильм'
            id='search-form'
          />
          </form>
          <button className='search-form__search-button'>Найти</button>
        </div>
        <div className='search-form__search-items'>
          {/* <button className='search-form__search-button'>Найти</button> */}
          <hr className='search-form__search-vr' />
          <Toggle />
          <p className='search-form__search-subtitle'>Короткометражки</p>
        </div>
      </div>
      <hr className='search-form__divider' />
    </section>
  );
}

export default SearchForm;
