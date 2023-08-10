import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  const [loggedIn] = React.useState(true);

  return (
    <section className='movies'>
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

export default Movies;
