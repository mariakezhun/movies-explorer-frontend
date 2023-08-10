import './Techs.css';
import React from 'react';

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__container'>
        <h2 className='techs__title'>Технологии</h2>
        <hr className='techs__divider' />
        <div className='techs__content'>
          <h3 className='techs__subtitle'>7 технологий</h3>
          <p className='techs__paragraph'>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <div className='techs__blocks'>
            <div className='techs__block'>
              <p className='techs__block-text'>HTML</p>
            </div>
            <div className='techs__block'>
              <p className='techs__block-text'>CSS</p>
            </div>
            <div className='techs__block'>
              <p className='techs__block-text'>JS</p>
            </div>
            <div className='techs__block'>
              <p className='techs__block-text'>React</p>
            </div>
            <div className='techs__block'>
              <p className='techs__block-text'>Git</p>
            </div>
            <div className='techs__block'>
              <p className='techs__block-text'>Express.js</p>
            </div>
            <div className='techs__block'>
              <p className='techs__block-text'>mongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
