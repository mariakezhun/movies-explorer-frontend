import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className='register'>
        <button className='register__logo'></button>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form'>
          <label className='register__lable' htmlFor='register-name'>
            Имя
          </label>
          <input
            className='register__input'
            type='text'
            id='register-name'
            name='register-name'
            required
            minLength='2'
            maxLength='30'
          />
          <div className='register__error-container'>
            <span className='register__error name-error'></span>
          </div>
          <label className='register__lable' htmlFor='register-email'>
            E-mail
          </label>
          <input
            className='register__input'
            type='email'
            id='register-email'
            name='register-email'
            required
            minLength='2'
            maxLength='30'
          />
          <div className='register__error-container'>
            <span className='register__error email-error'></span>
          </div>
          <label className='register__lable' htmlFor='register-password'>
            Пароль
          </label>
          <input
            className='register__input'
            type='password'
            id='register-password'
            name='register-password'
            required
            minLength='2'
            maxLength='30'
          />
          <div className='register__error-container'>
            <span className='register__error password-error'></span>
          </div>
        </form>
        <button className='register__button'>Зарегистрироваться</button>
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
