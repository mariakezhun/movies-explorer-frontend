import './Profile.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile(props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid, setIsValid } =
    useFormWithValidation({});

  React.useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser, setValues]);

  React.useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [values, setIsValid]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.onUpdateUser({
        name: values.name,
        email: values.email,
      });
      setIsEdit(false);
    }
  }
  console.log(props.successMessage);
  return (
    <>
      <section className='profile'>
        <h1 className='profile__title'>{`Привет, ${currentUser.name}`}</h1>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__lable' htmlFor='profile-name'>
            Имя
            <input
              onChange={handleChange}
              value={values.name}
              className='profile__input'
              type='text'
              id='profile-name'
              name='name'
              required
              minLength='2'
              maxLength='30'
              placeholder={currentUser.name}
              disabled={!isEdit}
            />
          </label>
          <span className='profile__input-error'>{errors.name}</span>
          <hr className='profile__devider' />
          <label className='profile__lable' htmlFor='profile-email'>
            E-mail
            <input
              onChange={handleChange}
              value={values.email}
              className='profile__input'
              type='email'
              id='profile-email'
              name='email'
              required
              minLength='2'
              maxLength='30'
              placeholder={currentUser.email}
              disabled={!isEdit}
            />
          </label>
          <span className='profile__input-error'>{errors.email}</span>
          <div className='profile__save-container'>
            {props.isUpdate ? (
              <p className='profile__success'>{props.successMessage}</p>
            ) : (
              <p className='profile__error'>{props.errorMessage}</p>
            )}
            {/* <p className='profile__error'>
              {props.isUpdate ?  props.successMessage : props.errorMessage}
            </p> */}
            {isEdit ? (
              <button className='profile__button' disabled={!isValid}>
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className='profile__edit'
                  onClick={() => setIsEdit(true)}
                >
                  Редактировать
                </button>
                <button className='profile__signout' onClick={props.onSignOut}>
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
