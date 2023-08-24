import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <hr className='footer__divider' />
      <div className='footer__container'>
        <p className='footer__text'>© 2023</p>
        <div className='footer__text-container'>
          <a
            className='footer__text'
            target='_blank'
            href='https://practicum.yandex.ru/'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__text'
            target='_blank'
            href='https://github.com/'
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
