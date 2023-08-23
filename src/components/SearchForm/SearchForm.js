import './SearchForm.css';
import React from 'react';
import searchIcon from '../../images/search-icon.svg';
import Toggle from '../Toggle/Toggle';

function SearchForm(props) {
  return (
    <section className='search-form'>
      <div className='search-form__rectangle'>
        <div className='search-form__search-container'>
          <img
            className='search-form__search-icon'
            src={searchIcon}
            alt='Иконка поиска'
          />
          <form
            className='search-form__form'
            onSubmit={props.handleSearchSubmit}
          >
            <input
              value={props.searchInputValue}
              onChange={props.onSearchChange}
              className='search-form__search-input'
              type='text'
              name='search-form'
              placeholder='Фильм'
              id='search-form'
              required
            />
            <button className='search-form__search-button' type='submit'>
              Найти
            </button>
          </form>
        </div>
        <div className='search-form__search-items'>
          <hr className='search-form__search-vr' />
          <Toggle
            isToggle={props.isToggle}
            handleShortMoviesChange={props.handleShortMoviesChange}
          />
          <p className='search-form__search-subtitle'>Короткометражки</p>
        </div>
      </div>
      <hr className='search-form__divider' />
    </section>
  );
}

export default SearchForm;
