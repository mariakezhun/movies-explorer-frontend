import './AboutProject.css';
import React from 'react';

function AboutProject() {
  return (
    <section className='about-project' id='about-project-id'>
      <h2 className='about-project__title'>О проекте</h2>
      <hr className='about-project__divider' />
      <div className='about-project__description'>
        <article className='about-project__paragraph'>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className='about-project__paragraph'>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className='about-project__timeline'>
        <div className='about-project__weeks-column about-project__weeks-column_type_backend'>
          <div className='about-project__week-background about-project__week-background_type_backend'>
            <p className='about-project__week-text about-project__week-text_type_backend'>
              1 неделя
            </p>
          </div>
          <p className='about-project__week-subtitle'>
            Back-end
          </p>
        </div>
        <div className='about-project__weeks-column about-project__weeks-column_type_frontend'>
          <div className='about-project__week-background about-project__week-background_type_frontend'>
            <p className='about-project__week-text about-project__week-text_type_frontend'>
              4 недели
            </p>
          </div>
          <p className='about-project__week-subtitle'>
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
