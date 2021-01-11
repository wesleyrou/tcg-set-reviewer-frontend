import React from 'react';
import apiService from '../../api-services/api-service';
import Card from '../Card/Card';
<<<<<<< HEAD
import './ReviewPage.css'
=======
import './ReviewPage.css';
>>>>>>> a025e1bdcb89e73472138eea136d4ff60a97b269

class ReviewPage extends React.Component {
  state = {
    ratings:{}
  }

  componentDidMount() {
    apiService.getCardReviews(this.props.currentSet.id)
    .then(res => {
      console.log(res)
    })
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

  handleRatingChange = (e, card) => {
    e.preventDefault();
    console.log(e.target.value, card)
    let updatedRatings = this.state.ratings
    updatedRatings[card.id] = e.target.value    
    this.setState({ratings: updatedRatings}, console.log(this.state.ratings))
  }

  handleSaveRatings = (e) => {
    e.preventDefault();

    console.log('SAVEEEEEEE RATINGSSSSSSS')
  }

  render() {
    const { currentSet, currentCards } = this.props;
<<<<<<< HEAD
    // console.log(currentSet, currentCards);
    const cards = currentCards.map((card, key) =>
      <Card key = {key} card = {card} handleRatingChange = {this.handleRatingChange}/>
    );

    return (
      <>        
        <form onSubmit = {(e) => {this.handleSaveRatings(e)}}>
          <header className='review-header'>
            <h2>{currentSet.set_name}</h2>
            <button type="submit">Save</button>
          </header>          
          <div className = 'cards-container'>
=======
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
>>>>>>> a025e1bdcb89e73472138eea136d4ff60a97b269
            {cards}
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewPage;