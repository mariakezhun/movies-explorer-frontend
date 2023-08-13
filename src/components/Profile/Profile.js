import './Profile.css';
import React from 'react';
import Header from '../Header/Header';

function Profile(props) {
  const [loggedIn] = React.useState(true);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <label className='profile__lable' htmlFor='profile-name'>
            Имя
            <input
              className='profile__input'
              type='text'
              id='profile-name'
              name='profile-name'
              required
              minLength='2'
              maxLength='30'
              placeholder='Виталий'
            />
          </label>
          <hr className='profile__devider' />
          <label className='profile__lable' htmlFor='profile-email'>
            E-mail
            <input
              className='profile__input'
              type='email'
              id='profile-email'
              name='profile-email'
              required
              minLength='2'
              maxLength='30'
              placeholder='pochta@yandex.ru'
            />
          </label>
          <div className='profile__save-container'>
            <p className='profile__error'>
              {/* При обновлении профиля произошла ошибка. */}
            </p>
            {props.isEdit ? (
              <button className='profile__button'>Сохранить</button>
            ) : (
              <>
                <button className='profile__edit'>Редактировать</button>
                <button className='profile__signout'>Выйти из аккаунта</button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
