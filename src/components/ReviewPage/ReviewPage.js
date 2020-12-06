import React from 'react';
import apiService from '../../services/api-service';
import Card from '../Card/Card';
import './ReviewPage.css';

class ReviewPage extends React.Component {

  componentDidMount() {
    // check if player has reviewed set before
    if (this.props.currentSet.id)
      apiService.postReview(this.props.currentSet.id, 1)
        .then(cardReviews => {
          console.log(cardReviews);
        })
        .catch(err => {
          console.log(err);
        });
    // false = save new review to db
    // true = this is an old review
    //    pull ratings
  }

  // TODO:
  // - create form submit function
  // - check db if player has reviewed set before

  render() {
    const { currentSet, currentCards } = this.props;
    console.log(currentSet, currentCards);
    const cards = currentCards.map((card, index) =>
      <Card key={index} url={card.image_url} name={card.card_name} />
    );

    return (
      <div className="Review">
        <h2>{currentSet.set_name}</h2>
        <form>
          <button type="submit">Save</button>
          <div className="card-container">
            {cards}
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewPage;