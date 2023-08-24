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
    return fetch(`${this._BASE_URL}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

export const moviesApi = new MoviesApi({
  BASE_URL: 'https://api.nomoreparties.co/beatfilm-movies',
});
