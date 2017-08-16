// Vendor Assets
import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

// Project Assets
import HomeContainer from '../../containers/HomeContainer'
import logo from '../../logo.svg';
import './App.css';

class App extends PureComponent {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Route exact path="/" component={HomeContainer} />
        </div>
      </div>
    );
  }
}

export default App;
