import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  return (
    <section className='movies'>
      <SearchForm
        handleSearchSubmit={props.handleSearchSubmit}
        searchInputValue={props.searchInputValue}
        onSearchChange={props.onSearchChange}
        isToggle={props.isToggle}
        handleShortMoviesChange={props.handleShortMoviesChange}
      />
      {props.isPreloader ? (
        <Preloader />
      ) : props.isResult ? (
        <MoviesCardList
          movies={props.movies}
          onMovieCardSave={props.onMovieCardSave}
          savedMovies={props.savedMovies}
          foundMovies={props.foundMovies}
          shortMovies={props.shortMovies}
        />
      ) : (
        <p className='movies__not-found'>Ничего не найдено</p>
      )}
      <Footer />
    </section>
  );
}

export default Movies;
