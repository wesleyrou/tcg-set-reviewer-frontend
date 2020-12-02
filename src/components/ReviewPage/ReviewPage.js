import React from 'react';

class ReviewPage extends React.Component {

  render() {
    const { currentSet, currentCards } = this.props;
    console.log(currentSet, currentCards);

    const cards = currentCards.map(card =>
      <>
        <img src={card.image_url} alt={card.card_name} />
        <p>1/5</p>
      </>
    );

    return (
      <>
        <h2>{currentSet.set_name}</h2>
        {cards[0]}
      </>
    );
  }
}

export default ReviewPage;