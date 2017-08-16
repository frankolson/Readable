// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// Project Assets
import logo from '../../logo.svg';

class Header extends PureComponent {
  render() {
    return (
      <div className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h2>Welcome to Readable</h2>
        <h5>A blogging site for those who like it simple</h5>
      </div>
    );
  }
}

export default Header;
