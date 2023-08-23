class MoviesApi {
  constructor({ BASE_URL }) {
    this._BASE_URL = BASE_URL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovieCards() {
    const token = localStorage.getItem('token');

    return fetch(`${this._BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  // addMovieCards(movie) {
  //   const token = localStorage.getItem('token');

  //   return fetch(`${this._BASE_URL}`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(movie),
  //   }).then(this._checkResponse);
  // }
}

export const moviesApi = new MoviesApi({
  BASE_URL: 'https://api.nomoreparties.co/beatfilm-movies',
});
