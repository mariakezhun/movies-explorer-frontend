import './Header.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import React from 'react';

function Header(props) {
  const headerLocation = useLocation();
  const landingLocation = '/';

  return props.loggedIn ? (
    <header
      className={`header ${
        headerLocation.pathname === landingLocation
          ? 'header_color_pink'
          : 'header_color_white'
      }`}
    >
      <div className='header__container'>
        <Link className='header__link' to='/'>
          <button className='header__logo'></button>
        </Link>
        <nav className='header__navbar_type_already-auth'>
          <Navigation />
        </nav>
      </div>
    </header>
  ) : (
    <header
      className={`header ${
        headerLocation.pathname === landingLocation
          ? 'header_color_pink'
          : 'header_color_white'
      }`}
    >
      <div className='header__container'>
        <Link className='header__link' to='/'>
          <button className='header__logo'></button>
        </Link>
        <nav className='header__navbar'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Link className='header__link' to='/'>
                    <button className='header__nav-button header__nav-button_type_signup'>
                      Регистрация
                    </button>
                  </Link>
                  <Link className='header__link' to='/signin'>
                    <button className='header__nav-button header__nav-button_type_signin'>
                      Войти
                    </button>
                  </Link>
                </>
              }
            />
          </Routes>
        </nav>
      </div>
    </header>
  );
}

export default Header;
