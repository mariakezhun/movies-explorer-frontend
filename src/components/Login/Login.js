import './Login.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  return (
<section className='login'>
        <button className='login__logo'></button>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form'>
          <label className='login__lable' htmlFor='login-email'>
            E-mail
          </label>
          <input
            className='login__input'
            type='email'
            id='login-email'
            name='login-email'
            required
            minLength='2'
            maxLength='30'
          />
          <div className='login__error-container'>
            <span className='login__error email-error'></span>
          </div>
          <label className='login__lable' htmlFor='login-password'>
            Пароль
          </label>
          <input
            className='login__input'
            type='password'
            id='login-password'
            name='login-password'
            required
            minLength='2'
            maxLength='30'
          />
          <div className='login__error-container'>
            <span className='login__error password-error'></span>
          </div>
        </form>
        <button className='login__button'>Войти</button>
        <div className='login__link-container'>
          <p className='login__link-text'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='login__link'>
          Регистрация
          </Link>
        </div>
    </section>
  );
}

export default Login;