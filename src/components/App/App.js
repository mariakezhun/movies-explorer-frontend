import './App.css';
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { errorBadRequest, errorConflict } from '../../utils/errors';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(
    JSON.parse(localStorage.getItem('Login'))
  );
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem('Movies'))
  );
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState(
    JSON.parse(localStorage.getItem('storageMoviesCards'))
  );
  const [searchInputValue, setSearchInputValue] = React.useState(
    JSON.parse(localStorage.getItem('storageMoviesText'))
  );
  const [searchSavedInputValue, setSearchSavedInputValue] = React.useState('');
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [isSearched, setIsSearched] = React.useState(
    JSON.parse(localStorage.getItem('Searched'))
  );
  const [isSearchedSaved, setIsSearchedSaved] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const [shortMovies, setShortMovies] = React.useState([]);
  const [shortSavedMovies, setSavedShortMovies] = React.useState([]);
  const [isToggle, setIsToggle] = React.useState(
    JSON.parse(localStorage.getItem('Toggle'))
  );
  const [isSavedToggle, setSavedIsToggle] = React.useState(
    JSON.parse(localStorage.getItem('SavedToggle'))
  );
  const [isResult, setIsResult] = React.useState(
    JSON.parse(localStorage.getItem('Result'))
  );
  const [isSavedResult, setIsSavedResult] = React.useState(
    JSON.parse(localStorage.getItem('SavedResult'))
  );
  const [isPreloader, setIsPreloader] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);

  const location = useLocation();
  const isHeaderLocation = ['/', '/profile', '/movies', '/saved-movies'];

  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          localStorage.removeItem('token');
          console.log(`Ошибка: ${err}`);
        });

      mainApi
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    moviesApi
      .getMovieCards()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [loggedIn]);

  React.useEffect(() => {
    mainApi
      .getMovie()
      .then((res) => {
        setSavedMovies(res.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  }, [loggedIn]);

  const handleRegistrate = (data) => {
    mainApi
      .register({ name: data.name, password: data.password, email: data.email })
      .then(() => {
        handleLogin({ password: data.password, email: data.email });
        setErrorMessage('');
      })
      .catch((err) => {
        if (err === errorConflict) {
          setErrorMessage('Пользователь с таким email уже существует');
          console.log(errorMessage);
        } else {
          setErrorMessage('При регистрации пользователя произошла ошибка');
        }
      });
  };

  const handleLogin = (data) => {
    mainApi
      .authorize({ email: data.email, password: data.password })
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        navigate('/movies');
        setErrorMessage('');
      })
      .catch((err) => {
        console.log(err);
        if (err === errorBadRequest) {
          setErrorMessage('Вы ввели неправильный логин или пароль');
        } else {
          setErrorMessage('При входе в аккаунт произошла ошибка');
        }
      });
  };

  function handleLogOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/');
    setFoundMovies([]);
    setSearchInputValue('');
    setIsSearched(false);
    localStorage.removeItem('storageMoviesText');
    localStorage.removeItem('storageMoviesCards');
    localStorage.removeItem(
      'storageSavedSearchedMovies',
      JSON.stringify(foundSavedMovies)
    );
    localStorage.removeItem('Movies');
    localStorage.removeItem('Searched');
    localStorage.removeItem('Result');
    localStorage.removeItem('SavedResult');
    localStorage.removeItem('Toggle');
    localStorage.removeItem('SavedToggle');
    localStorage.removeItem('Login');
  }

  const handleUpdateUser = ({ name, email }) => {
    mainApi
      .addUserInfo({ name, email })
      .then((res, err) => {
        if (err === errorConflict) {
          setErrorMessage('Пользователь с таким email уже существует');
        } else {
          setCurrentUser(res);
          setErrorMessage('');
          setIsUpdate(true);
          setSuccessMessage('Данные успешно обновлены')
          setTimeout(() => setSuccessMessage(''), 1000);
        }
      })
      .catch(() => {
        setErrorMessage('При обновлении профиля произошла ошибка');
      });
  };

  React.useEffect(() => {
    localStorage.setItem('storageMoviesText', JSON.stringify(searchInputValue));
    localStorage.setItem('storageMoviesCards', JSON.stringify(foundMovies));
    localStorage.setItem(
      'storageSavedSearchedMovies',
      JSON.stringify(foundSavedMovies)
    );
    localStorage.setItem('Movies', JSON.stringify(movies));
    localStorage.setItem('Searched', JSON.stringify(isSearched));
    localStorage.setItem('Result', JSON.stringify(isResult));
    localStorage.setItem('SavedResult', JSON.stringify(isSavedResult));
    localStorage.setItem('Toggle', JSON.stringify(isToggle));
    localStorage.setItem('SavedToggle', JSON.stringify(isSavedToggle));
    localStorage.setItem('Login', JSON.stringify(loggedIn));
  });

  function searchMovies() {
    const searchFilter = movies.filter((movie) => {
      return movie.nameRU
        .toLowerCase()
        .includes(searchInputValue.toLowerCase());
    });
    setIsPreloader(true);
    if (searchFilter.length < 1) {
      setIsResult(false);
      setFoundMovies([]);
      setTimeout(() => setIsPreloader(false), 500);
    } else {
      setFoundMovies(searchFilter);
      setIsResult(true);
      setTimeout(() => setIsPreloader(false), 500);
    }
  }

  function searchSavedMovies() {
    const searchSavedFilter = savedMovies.filter((movie) => {
      return movie.nameRU
        .toLowerCase()
        .includes(searchSavedInputValue.toLowerCase());
    });
    if (searchSavedFilter.length < 1) {
      setIsSavedResult(false);
      setFoundSavedMovies([]);
    } else {
      setFoundSavedMovies(searchSavedFilter);
      setIsSavedResult(true);
    }
  }

  function handleSearchChange(e) {
    setSearchInputValue(e.target.value);
  }

  function handleSearchSavedChange(e) {
    setSearchSavedInputValue(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    searchMovies();
    setIsSearched(true);
  }

  function handleSearchSavedSubmit(e) {
    e.preventDefault();
    searchSavedMovies();
    setIsSearchedSaved(true);
  }

  function saveMovie(movie) {
    mainApi
      .saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      .then((newSavedMovie) => {
        setSavedMovies([newSavedMovie, ...savedMovies]);
      });
  }

  function handleSaveMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter((c) => c._id !== movie._id);
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  React.useEffect(() => {
    if (isToggle) {
      const filteredShortMovies = foundMovies.filter((movie) => {
        return movie.duration <= 40;
      });
      setShortMovies(filteredShortMovies);
    }
  }, [isToggle, foundMovies, setShortMovies]);

  React.useEffect(() => {
    if (isSavedToggle) {
      const filteredShortSavedMovies = savedMovies.filter((movie) => {
        return movie.duration <= 40;
      });
      setSavedShortMovies(filteredShortSavedMovies);
    }
  }, [isSavedToggle, savedMovies, setSavedShortMovies]);

  function handleShortMoviesChange() {
    setIsToggle(!isToggle);
  }

  function handleShortSavedMoviesChange() {
    setSavedIsToggle(!isSavedToggle);
  }

  console.log(shortSavedMovies);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='body'>
        <div className='page'>
          {isHeaderLocation.includes(location.pathname) ? (
            <Header loggedIn={loggedIn} />
          ) : (
            ''
          )}
          <Routes>
            <Route
              path='/signup'
              element={
                <Register
                  handleRegistrate={handleRegistrate}
                  errorMessage={errorMessage}
                />
              }
            />
            <Route
              path='/signin'
              element={
                <Login handleLogin={handleLogin} errorMessage={errorMessage} />
              }
            />
            <Route path='/' element={<Main />} />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  element={Profile}
                  onSignOut={handleLogOut}
                  onUpdateUser={handleUpdateUser}
                  errorMessage={errorMessage}
                  loggedIn={loggedIn}
                  successMessage={successMessage}
                  isUpdate={isUpdate}
                />
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  element={Movies}
                  movies={isToggle ? shortMovies : foundMovies}
                  handleSearchSubmit={handleSearchSubmit}
                  searchInputValue={searchInputValue}
                  onSearchChange={handleSearchChange}
                  onMovieCardSave={saveMovie}
                  savedMovies={savedMovies}
                  isPreloader={isPreloader}
                  isToggle={isToggle}
                  handleShortMoviesChange={handleShortMoviesChange}
                  isResult={isResult}
                  loggedIn={loggedIn}
                  isSearched={isSearched}
                  onMovieCardDelete={handleSaveMovieDelete}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  movies={
                    isSearchedSaved
                      ? foundSavedMovies
                      : isSavedToggle
                      ? shortSavedMovies
                      : savedMovies
                  }
                  onMovieCardDelete={handleSaveMovieDelete}
                  savedMovies={savedMovies}
                  handleSearchSubmit={handleSearchSavedSubmit}
                  searchInputValue={searchSavedInputValue}
                  onSearchChange={handleSearchSavedChange}
                  foundMovies={foundSavedMovies}
                  loggedIn={loggedIn}
                  isSearched={isSearchedSaved}
                  isResult={isSavedResult}
                  isToggle={isSavedToggle}
                  handleShortMoviesChange={handleShortSavedMoviesChange}
                />
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
