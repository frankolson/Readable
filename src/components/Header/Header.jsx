// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// Project Assets
import logo from '../../logo.svg';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="App-logo" alt="logo" /> Readable
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-links" aria-controls="navbar-collapse-links" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-collapse-links">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Write a story +</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
