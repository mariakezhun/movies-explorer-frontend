class MainApi {
  constructor({ BASE_URL }) {
    this._BASE_URL = BASE_URL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  register(data) {
    return fetch(`${this._BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    }).then(this._checkResponse);
  }

  authorize({ password, email }) {
    return fetch(`${this._BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email }),
    }).then(this._checkResponse);
  }
  checkToken() {
    const token = localStorage.getItem('token');

    return fetch(`${this._BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  getUserInfo() {
    const token = localStorage.getItem('token');
    return fetch(`${this._BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  addUserInfo({ name, email }) {
    const token = localStorage.getItem('token');

    return fetch(`${this._BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    }).then(this._checkResponse);
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  }) {
    const token = localStorage.getItem('token');

    return fetch(`${this._BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then(this._checkResponse);
  }

  getMovie() {
    const token = localStorage.getItem('token');

    return fetch(`${this._BASE_URL}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  deleteMovie(_id) {
    const token = localStorage.getItem('token');

    return fetch(`${this._BASE_URL}/movies/${_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

export const mainApi = new MainApi({
  // BASE_URL: 'https://api.mkezhun.nomoredomains.xyz',
  BASE_URL: 'http://localhost:3000',
});
