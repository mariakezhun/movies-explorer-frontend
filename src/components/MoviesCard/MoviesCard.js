import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = React.useState('');
  const cardLocation = useLocation();
  const movieLocation = '/movies';

  React.useEffect(() => {
    setIsSaved(
      props.savedMovies.some((savedMovie) => {
        return savedMovie.movieId === props.movie.id;
      })
    );
  }, [props.movie.id, props.savedMovies]);

  function handleMovieCardSave() {
    return !isSaved ? props.onMovieCardSave(props.movie) : '';
  }

  function handleMovieCardDelete() {
    props.onMovieCardDelete(props.movie);
  }

  function hoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours > 0 ? ` ${hours}ч` : ''}${minutes > 0 ? ` ${minutes}м` : ''}`;
  }

  const movieDuration = hoursAndMinutes(props.movie.duration);

  return (
    <section className='movies-card'>
      {cardLocation.pathname === movieLocation ? (
        <button
          className={`movies-card__button ${
            isSaved
              ? 'movies-card__button_type_already-saved'
              : 'movies-card__button_type_save'
          }`}
          onClick={handleMovieCardSave}
        >
          {!isSaved ? 'Сохранить' : ''}
        </button>
      ) : (
        <button
          className='movies-card__button movies-card__button_type_delete'
          onClick={handleMovieCardDelete}
        ></button>
      )}
      <img
        className='movies-card__thumbnail'
        src={
          cardLocation.pathname === movieLocation
            ? `https://api.nomoreparties.co/${props.movie.image.url}`
            : props.movie.image
        }
        alt={props.movie.nameRU}
      />
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{props.movie.nameRU}</h2>
        <div className='movies-card__duration-background'>
          <p className='movies-card__duration'>{movieDuration}</p>
        </div>
      </div>
    </section>
  );
}

export default MoviesCard;
