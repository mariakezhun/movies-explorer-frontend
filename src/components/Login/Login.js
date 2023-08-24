import './Login.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin({ email: values.email, password: values.password });
  }

  return (
    <section className='login'>
      <button className='login__logo'></button>
      <h1 className='login__title'>Рады видеть!</h1>
      <form className='login__form' onSubmit={handleSubmit}>
        <label className='login__lable' htmlFor='login-email'>
          E-mail
        </label>
        <input
          value={values.email}
          onChange={handleChange}
          className='login__input'
          type='email'
          id='login-email'
          name='email'
          required
          minLength='2'
          maxLength='30'
        />
        <div className='login__error-container'>
          <span className='login__error email-error'>{errors.email}</span>
        </div>
        <label className='login__lable' htmlFor='login-password'>
          Пароль
        </label>
        <input
          value={values.password}
          onChange={handleChange}
          className='login__input'
          type='password'
          id='login-password'
          name='password'
          required
          minLength='8'
          maxLength='30'
          formNoValidate
        />
        <div className='login__error-container'>
          <span className='login__error password-error'>{errors.password}</span>
        </div>
        <div className='login__save-container'>
          <p className='login__save-error'>{props.errorMessage}</p>
          <button className='login__button' disabled={!isValid}>
            Войти
          </button>
        </div>
      </form>
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
