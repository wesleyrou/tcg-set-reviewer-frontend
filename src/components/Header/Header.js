import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

class Header extends React.Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearUserId();

  };

  renderLogoutLink = () => {
    return (
      <Link
        onClick={this.handleLogoutClick}
        to='/'>
        Logout
      </Link>
    );
  };

  render() {
    return <header className="Header">
      <h1>MTG Set Reviewer</h1>
      <nav>
        <Link to='/' className="active"> Home </Link>
        <Link to='/dashboard' > Dashboard </Link>
        {/* <Link to='/review' > Review </Link> */}
        {TokenService.hasAuthToken() ? this.renderLogoutLink() : ''}
      </nav>
    </header>;
  }

}

export default Header;
