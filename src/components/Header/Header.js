import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return <header className="Header">
      <h1>MTG Set Reviewer</h1>
      <nav>
        <a className="active" href="#home">Home</a>
        <a href="#news">Dashboard</a>
        <a href="#contact">Review</a>
        <a href="#about">About</a>
      </nav>
    </header>;
  }

}

export default Header;
