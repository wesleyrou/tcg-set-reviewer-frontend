import React from 'react'
import './Card.css';

class Card extends React.Component {
    state = {
        flipped: false,
        edit: false,
    }

    handleFlipCard = () => {        
        this.setState({flipped:!this.state.flipped})
    }

    handleEditRating = (e) => {
        this.setState({edit: true})
        console.log('Edittt')
    }

    render() {
        const {card, ratings} = this.props
        const currentCard = ratings.find(currentCard => card.id === currentCard.card_id)
        console.log(currentCard)

        let ratingDisplay;

        if(this.state.edit === true || !currentCard){
            ratingDisplay = <input onChange = {(e) => this.props.handleRatingChange(e, card) } type="text" />
        } else {
            ratingDisplay = <div onClick = {(e) => this.handleEditRating(e)}>{currentCard.rating}</div>
        }

        if(card.card_name.includes('//')){            

            let front_name = card.card_name.split('//')[0]
            let back_name = card.card_name.split('//')[1]

            let front_img_url = card.image_url.split(',')[0]
            let back_img_url = card.image_url.split(',')[1]
            
            return <div className = 'rating-container'>
                <div className = 'card-container' onClick = {() => this.handleFlipCard()} hidden = {this.state.flipped}>
                    <img src={front_img_url} alt={front_name} />                    
                </div>
                <div className = 'card-container' onClick = {() => this.handleFlipCard()} hidden = {!this.state.flipped}>
                    <img src={back_img_url} alt={back_name} />                    
                </div>
                {
                ratingDisplay
                }
            </div>
        } else {
            return  <div className = 'rating-container'>
                <div className = 'card-container'>
                    <img src={card.image_url} alt={card.card_name} />                    
                </div>
                {
                ratingDisplay
                }
                
            </div>
        }

        
    }
}

export default Card;
