import config from '../config';
import TokenService from '../services/token-service';

const apiService = {
  // GET all sets
  getAllSets: () => {
    return fetch(`${config.API_ENDPOINT}/sets`)
      .then(res => res.json())
      .then(allSets => allSets);
  },

  getCardsOfSet: (set_ID) => {
    return fetch(`${config.API_ENDPOINT}/cards/${set_ID}`)
      .then(res => res.json())
      .then(cardsOfSet => cardsOfSet);
  },

  // POST sets when first getting to review page
  postReview: (set_ID, user_ID) => {
    return fetch(`${config.API_ENDPOINT}/reviews/${set_ID}`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: user_ID,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  // AUTH
  postLogin(credentials) {
    TokenService.saveUsername(credentials.username);
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  postUser(user) {
    TokenService.saveUsername(user.username);
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
};

export default apiService;