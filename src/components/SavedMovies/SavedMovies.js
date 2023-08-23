import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  return (
    <section className='saved-movies'>
      <SearchForm
        handleSearchSubmit={props.handleSearchSubmit}
        searchInputValue={props.searchInputValue}
        onSearchChange={props.onSearchChange}
      />
      <MoviesCardList
        movies={props.movies}
        onMovieCardDelete={props.onMovieCardDelete}
        savedMovies={props.savedMovies}
        foundMovies={props.foundMovies}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;
