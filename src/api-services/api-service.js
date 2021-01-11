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

<<<<<<< HEAD
  // GET card reviews
  getCardReviews: (setId) => {
    return fetch(`${baseURL}/reviews/${setId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: 1})
    })
      .then(res => res.json())
      .then(response => response);
  },

  // PATCH review
  patchCardReviews : (cardReviews) => {
    return fetch(`${baseURL}/reviews`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cardReviews)
    })
      .then(res => res.json())
      .then(response => response);
  },

=======
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
>>>>>>> a025e1bdcb89e73472138eea136d4ff60a97b269
};


export default apiService;