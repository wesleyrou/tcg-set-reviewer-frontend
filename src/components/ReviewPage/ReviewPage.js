import React from 'react';
import Card from '../Card/Card';
import './ReviewPage.css';

class ReviewPage extends React.Component {

  componentDidMount() {
    // check if player has reviewed set before
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
    const cards = currentCards.map(card =>
      <Card key={card.card_name} url={card.image_url} name={card.card_name} />
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