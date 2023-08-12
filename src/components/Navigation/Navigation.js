import './Navigation.css';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function Navigation() {
  const navigationLocation = useLocation();
  const moviesLocation = '/movies';
  const savedMoviesLocation = '/saved-movies';

  const [isBurgerMenu, setIsBurgerMenu] = React.useState(false);

  isBurgerMenu
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = '');

  return (
    <section className='navigation'>
      <div
        className={`navigation__list ${
          isBurgerMenu ? 'navigation__list_opened' : ''
        }`}
        onClick={() => setIsBurgerMenu(false)}
      >
        <div className='navigation__container'>
          <span className='navigation__underline'>
            <a
              className='navigation__link navigation__link_type_mobile'
              href='/'
            >
              Главная
            </a>
          </span>
          <span
            className={`navigation__underline ${
              navigationLocation.pathname === moviesLocation
                ? 'navigation__underline_active'
                : ''
            }`}
          >
            <a
              className={`navigation__link ${
                navigationLocation.pathname === moviesLocation
                  ? 'navigation__link_active'
                  : ''
              }`}
              href='/movies'
            >
              Фильмы
            </a>
          </span>
          <span
            className={`navigation__underline ${
              navigationLocation.pathname === savedMoviesLocation
                ? 'navigation__underline_active'
                : ''
            }`}
          >
            <a
              className={`navigation__link ${
                navigationLocation.pathname === savedMoviesLocation
                  ? 'navigation__link_active'
                  : ''
              }`}
              href='/saved-movies'
            >
              Сохранённые фильмы
            </a>
          </span>
          <div className='navigation__account-container'>
            <a className='navigation__account' href='/profile'>
              Аккаунт
            </a>
            <a href='/profile' className='navigation__account-icon'></a>
          </div>
        </div>
      </div>
      <button
        className={`navigation__burger-button ${
          isBurgerMenu
            ? 'navigation__burger-button_type_close'
            : 'navigation__burger-button_type_burger'
        }`}
        onClick={() => setIsBurgerMenu(!isBurgerMenu)}
      ></button>
    </section>
  );
}

export default Navigation;
