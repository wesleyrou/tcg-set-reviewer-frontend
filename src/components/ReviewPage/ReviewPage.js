import React from 'react';

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
      <div>
        <img src={card.image_url} alt={card.card_name} />
        <input type="text" />
      </div>
    );

    return (
      <>
        <h2>{currentSet.set_name}</h2>
        <form>
          <button type="submit">Save</button>
          {cards}
        </form>

      </>
    );
  }
}

export default ReviewPage;