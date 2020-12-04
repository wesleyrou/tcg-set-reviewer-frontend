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