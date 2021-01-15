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
  getCardReviews: (setId, user_id) => {
    return fetch(`${baseURL}/reviews/${setId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: user_id})
    })
      .then(res => res.json())
      .then(response => response);
  },

  // GET All card reviews
  getAllCardReviews: (setCode) => {
    return fetch(`${baseURL}/compiledReviews/${setCode}`)
      .then(res => res.json())
      .then(response => response);
  },

  // PATCH review
  patchCardReviews : (cardReviews, currentReview) => {
    console.log(cardReviews)
    return fetch(`${baseURL}/cardReviews`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cardReviews: cardReviews, currentReview: currentReview})
    })
      .then(res => res.json())
      .then(response => response);
  },

};


export default apiService;