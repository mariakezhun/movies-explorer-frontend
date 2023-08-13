import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {
  return (
    <section className='movies-card'>
      <button
        className={`movies-card__button movies-card__button_type_${props.classType}`}
      >
        {props.buttonText}
      </button>
      <img
        className='movies-card__thumbnail'
        src={props.thumbnail}
        alt='Заставка'
      />
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{props.title}</h2>
        <div className='movies-card__duration-background'>
          <p className='movies-card__duration'>{props.duration}</p>
        </div>
      </div>
    </section>
  );
}

export default MoviesCard;
