import React from 'react';
<<<<<<< HEAD
import './Header.css'

class Header extends React.Component {
  render() {
    return <header className='header-main'>
      MTG Set Reviewer
    </header>
=======
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
>>>>>>> a025e1bdcb89e73472138eea136d4ff60a97b269
  }

}

export default Header;
