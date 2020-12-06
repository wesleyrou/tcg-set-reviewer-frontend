const baseURL = 'http://localhost:8000/api';

const apiService = {
  // GET all sets
  getAllSets: () => {
    return fetch(`${baseURL}/sets`)
      .then(res => res.json())
      .then(allSets => allSets);
  },

  getCardsOfSet: (set_ID) => {
    return fetch(`${baseURL}/cards/${set_ID}`)
      .then(res => res.json())
      .then(cardsOfSet => cardsOfSet);
  },

  postReview: (set_ID, user_ID) => {
    return fetch(`${baseURL}/reviews/${set_ID}`, {
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
  }
};


export default apiService;