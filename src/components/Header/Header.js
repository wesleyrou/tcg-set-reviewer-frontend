import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return <header className="Header">
      <h1>MTG Set Reviewer</h1>
      <nav>
        <Link to='/' className="active"> Home </Link>
        <Link to='/dashboard' > Dashboard </Link>
        <Link to='/review' > Review </Link>
      </nav>
    </header>;
  }

}

export default Header;
