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
          <p className='footer__text'>Яндекс.Практикум</p>
          <p className='footer__text'>Github</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
