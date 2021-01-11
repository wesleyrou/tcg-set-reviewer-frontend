<<<<<<< HEAD
import React from 'react'
import './Card.css';

class Card extends React.Component {
    state = {
        flipped: false
    }

    handleFlipCard = () => {        
        this.setState({flipped:!this.state.flipped})
    }

    render() {
        const {card} = this.props

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
                <input onChange = {(e) => this.props.handleRatingChange(e, card) } type="text" />
            </div>
        } else {
            return  <div className = 'rating-container'>
                <div className = 'card-container'>
                    <img src={card.image_url} alt={card.card_name} />                    
                </div>
                <input onInput = {(e) => this.props.handleRatingChange(e, card) } type="text" />
            </div>
        }

        
    }
}

export default Card;
=======
import React from 'react';
import './Card.css';

class Card extends React.Component {

  render() {
    return <div className="Card">
      <img src={this.props.url} alt={this.props.name} />
      <input type="text" />
    </div>;
  }
}

export default Card;
>>>>>>> a025e1bdcb89e73472138eea136d4ff60a97b269
