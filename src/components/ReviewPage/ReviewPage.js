import React from 'react';
import apiService from '../../api-services/api-service';
import Card from '../Card/Card';
import './ReviewPage.css';

class ReviewPage extends React.Component {
  state = {
    ratings:[],
    currentReview:{},

  }

  componentDidMount() {
    // check if player has reviewed set before
    // false = save new review to db
    // true = this is an old review
    //    pull ratings
  }

  // TODO:
  // - create form submit function
  // - check db if player has reviewed set before

  handleGetReview = (e) => {
    e.preventDefault();

    const user_id = e.target['user-id'].value

    console.log('HERAEERERERE', e.target['user-id'].value)
    apiService.getCardReviews(this.props.currentSet.id, user_id)
    .then(res => {
      console.log(res)
      this.setState({currentReview:res.review, ratings: res.cardReviews},console.log(this.state.currentReview, this.state.ratings))
    })
  }

  handleRatingChange = (e, card) => {
    e.preventDefault();
    console.log(card, this.state.currentReview.id)
    console.log(e.target.value, card)
    let updatedRatings = this.state.ratings
    const targetCardIndex = updatedRatings.findIndex(savedCard => savedCard.card_id === card.id)
    targetCardIndex === -1
    ?updatedRatings.push({review_id: this.state.currentReview.id, card_id: card.id, rating: e.target.value})
    :updatedRatings[targetCardIndex] = {review_id: this.state.currentReview.id, card_id: card.id, rating: e.target.value}
    this.setState({ratings: updatedRatings}, console.log(this.state.ratings))
  }

  handleSaveRatings = (e) => {    
    e.preventDefault();
    apiService.patchCardReviews(this.state.ratings,this.state.currentReview)
    .then(() => {
      console.log('reviews saved')
    })

    console.log('SAVEEEEEEE RATINGSSSSSSS',this.state.ratings)
  }

  render() {
    const { currentSet, currentCards } = this.props;
    // console.log(currentSet, currentCards);
    const cards = currentCards.map((card, key) =>
      <Card key = {key} card = {card} ratings = {this.state.ratings} handleRatingChange = {this.handleRatingChange}/>
    );

    return (
      <>
        <h2>{currentSet.set_name}</h2>
        <form onSubmit = {(e) => this.handleGetReview(e)}>
          <label htmlFor='user-id'>User ID</label>
          <input type='text' id='user-id' name='user-id'></input>
          <button  type="click">Get Review</button>
        </form>
        <form onSubmit = {(e) => this.handleSaveRatings(e)}>    
          <button type="submit">Save</button>          
          <div className = 'cards-container'>
            {cards}
          </div>
        </form>
      </>
    );
  }
}

export default ReviewPage;