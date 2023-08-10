import './AboutMe.css';
import React from 'react';
import studentPhoto from '../../images/student-photo.png';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <hr className='about-me__divider' />
      <div className='about-me__student'>
        <div className='about-me__student-info'>
          <h3 className='about-me__student-title'>Виталий</h3>
          <p className='about-me__student-subtitle'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='about-me__student-paragraph'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className='about-me__student-link' href='#'>
            Github
          </a>
        </div>
        <img
          className='about-me__student-photo'
          src={studentPhoto}
          alt='Аватарка'
        />
      </div>
      <div className='about-me__portfolio'>
        <h3 className='about-me__portfolio-title'>Портфолио</h3>
        <div className='about-me__portfolio-link'>
          <a className='about-me__portfolio-link-text' href='#'>
            Статичный сайт
          </a>
          <a className='about-me__portfolio-link-arrow' href='#'>
            ↗
          </a>
        </div>
        <div className='about-me__portfolio-link'>
          <a className='about-me__portfolio-link-text' href='#'>
            Адаптивный сайт
          </a>
          <a className='about-me__portfolio-link-arrow' href='#'>
            ↗
          </a>
        </div>
        <div className='about-me__portfolio-link'>
          <a className='about-me__portfolio-link-text' href='#'>
            Одностраничное приложение
          </a>
          <a className='about-me__portfolio-link-arrow' href='#'>
            ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
