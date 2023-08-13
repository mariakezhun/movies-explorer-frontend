import './NavTab.css';
import React from 'react';

function NavTab() {
  return (
    <section className='navtab'>
      <ul className='navtab__links'>
        <li className='navtab__link-container'>
          <a className='navtab__link' href='#about-project-id'>
            О проекте
          </a>
        </li>
        <li className='navtab__link-container'>
          <a className='navtab__link' href='#techs-id'>
            Технологии
          </a>
        </li>
        <li className='navtab__link-container'>
          <a className='navtab__link' href='#about-me-id'>
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavTab;
