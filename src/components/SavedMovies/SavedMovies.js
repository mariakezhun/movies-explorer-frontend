import './SavedMovies.css';
import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  const [loggedIn] = React.useState(true);

  return (
    <section className='saved-movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList />
      <div className='movies__button-container'>
        <button className='movies__more-button'>Ещё</button>
      </div>
      <Footer />
    </section>
  );
}

export default SavedMovies;