import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import thumbnailOne from '../../images/thumbnail-1.png';
import thumbnailTwo from '../../images/thumbnail-2.png';
import thumbnailThree from '../../images/thumbnail-3.png';
import thumbnailFour from '../../images/thumbnail-4.png';
import thumbnailFive from '../../images/thumbnail-5.png';
import thumbnailSix from '../../images/thumbnail-6.png';
import thumbnailSeven from '../../images/thumbnail-7.png';
import thumbnailEight from '../../images/thumbnail-8.png';
import thumbnailNine from '../../images/thumbnail-9.png';
import thumbnailTen from '../../images/thumbnail-10.png';
import thumbnailEleven from '../../images/thumbnail-11.png';
import thumbnailTwelve from '../../images/thumbnail-12.png';

function MoviesCardList() {
  return (
    <section className='movies-card-list'>
      <MoviesCard
        thumbnail={thumbnailOne}
        title={'33 слова о дизайне'}
        duration={'1ч 17м'}
        classType={'save'}
        buttonText={'Сохранить'}
      />
      <MoviesCard
        thumbnail={thumbnailTwo}
        title={'Киноальманах «100 лет дизайна»'}
        duration={'1ч 17м'}
        classType={'already-saved'}
      />
      <MoviesCard
        thumbnail={thumbnailThree}
        title={'В погоне за Бенкси'}
        duration={'1ч 17м'}
      />
      <MoviesCard
        thumbnail={thumbnailFour}
        title={'Баския: Взрыв реальности'}
        duration={'1ч 17м'}
      />
      <MoviesCard
        thumbnail={thumbnailFive}
        title={'Бег это свобода'}
        duration={'1ч 17м'}
      />
      <MoviesCard
        thumbnail={thumbnailSix}
        title={'Книготорговцы'}
        duration={'1ч 17м'}
        classType={'already-saved'}
      />
      <MoviesCard
        thumbnail={thumbnailSeven}
        title={'Когда я думаю о Германии ночью'}
        duration={'1ч 17м'}
      />
      <MoviesCard
        thumbnail={thumbnailEight}
        title={'Gimme Danger: История Игги и The Stooges'}
        duration={'1ч 17м'}
      />
      <MoviesCard
        thumbnail={thumbnailNine}
        title={'Дженис: Маленькая девочка грустит'}
        duration={'1ч 17м'}
      />
      <MoviesCard
        thumbnail={thumbnailTen}
        title={'Соберись перед прыжком'}
        duration={'1ч 17м'}
      />
      <MoviesCard
        thumbnail={thumbnailEleven}
        title={'Пи Джей Харви: A dog called money'}
        duration={'1ч 17м'}
      />
      <MoviesCard
        thumbnail={thumbnailTwelve}
        title={'По волнам: Искусство звука в кино'}
        duration={'1ч 17м'}
      />
    </section>
  );
}

export default MoviesCardList;
