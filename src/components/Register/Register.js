import './Register.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register(props) {
  const { values, handleChange, errors, isValid, setIsValid } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegistrate({
      name: values.name,
      password: values.password,
      email: values.email,
    });
  }

  React.useEffect(() => {
    if (values < 1) {
      setIsValid(false);
    }
  }, [values, setIsValid]);

  return (
    <section className='register'>
      <button className='register__logo'></button>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form onSubmit={handleSubmit} className='register__form'>
        <label className='register__lable' htmlFor='register-name'>
          Имя
        </label>
        <input
          value={values.name}
          onChange={handleChange}
          className='register__input'
          type='text'
          id='register-name'
          name='name'
          required
          minLength='2'
          maxLength='30'
        />
        <div className='register__error-container'>
          <span className='register__error name-error'>{errors.name}</span>
        </div>
        <label className='register__lable' htmlFor='register-email'>
          E-mail
        </label>
        <input
          value={values.email}
          onChange={handleChange}
          className='register__input'
          type='email'
          id='register-email'
          name='email'
          required
          minLength='2'
          maxLength='30'
        />
        <div className='register__error-container'>
          <span className='register__error email-error'>{errors.email}</span>
        </div>
        <label className='register__lable' htmlFor='register-password'>
          Пароль
        </label>
        <input
          value={values.password}
          onChange={handleChange}
          className='register__input'
          type='password'
          id='register-password'
          name='password'
          required
          minLength='2'
          maxLength='30'
        />
        <div className='register__error-container'>
          <span className='register__error password-error'>
            {errors.password}
          </span>
        </div>
        <div className='register__save-container'>
          <span className='register__save-error'>{props.errorMessage}</span>
          <button className='register__button' type='submit' disabled={!isValid}>
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className='register__link-container'>
        <p className='register__link-text'>Уже зарегистрированы?</p>
        <Link to='/signin' className='register__link'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
