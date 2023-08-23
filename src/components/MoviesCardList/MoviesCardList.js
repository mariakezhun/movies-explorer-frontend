import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useLocation } from 'react-router-dom';

const LG_ROW_CARD_COUNT = 3;
const MD_ROW_CARD_COUNT = 2;
const SM_ROW_CARD_COUNT = 2;

const LG_INITIAL_CARD_COUNT = 12;
const MD_INITIAL_CARD_COUNT = 9;
const SM_INITIAL_CARD_COUNT = 5;

function MoviesCardList(props) {
  const moviesCardListLocation = useLocation();
  const moviesLocation = '/movies';

  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] =
    React.useState(initialCardCount);

  const roundedVisibleCardCount = isDesktop
    ? Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount
    : isTablet
    ? Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount
    : Math.floor((visibleCardCount / cardColumnCount) * cardColumnCount);

  const handleClick = () => {
    calculateCardCount();
  };

  React.useEffect(() => {
    return setVisibleCardCount(initialCardCount)
  }, [props.movies])

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
  };
  console.log(props.movies.length);

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__grid'>
        {props.movies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            onMovieCardSave={props.onMovieCardSave}
            onMovieCardDelete={props.onMovieCardDelete}
            savedMovies={props.savedMovies}
          />
        ))}
      </div>
      {props.movies.length > 11 &&
      moviesCardListLocation.pathname === moviesLocation ? (
        <div className='movies-card-list__button-container'>
          <button
            className='movies-card-list__more-button'
            onClick={handleClick}
          >
            Ещё
          </button>
        </div>
      ) : (
        ''
      )}
    </section>
  );
}

export default MoviesCardList;
