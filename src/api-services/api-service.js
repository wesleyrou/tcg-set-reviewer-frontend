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

};


export default apiService;