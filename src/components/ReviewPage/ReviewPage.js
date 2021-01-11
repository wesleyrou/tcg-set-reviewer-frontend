import React from 'react';
import apiService from '../../api-services/api-service';
import Card from '../Card/Card';
import './ReviewPage.css';

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
    // console.log(currentSet, currentCards);
    const cards = currentCards.map((card, key) =>
      <Card key = {key} card = {card} handleRatingChange = {this.handleRatingChange}/>
    );

    return (
      <>
        <h2>{currentSet.set_name}</h2>
        <form onSubmit = {(e) => {this.handleSaveRatings(e)}}>          
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