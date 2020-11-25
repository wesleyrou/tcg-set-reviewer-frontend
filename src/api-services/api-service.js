const baseURL = 'http://localhost:8000/api';

const apiService = {
  // GET all sets
  getAllSets: () => {
    return fetch(`${baseURL}/sets`)
      .then(res => res.json())
      .then(allSets => allSets);
  },

  getCardsOfSet : (set_ID) => {
    return fetch(`${baseURL}/cards/${set_ID}`)
      .then(res => res.json())
      .then(cardsOfSet => cardsOfSet);
  },

};


export default apiService;