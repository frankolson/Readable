// Vendor Assets
import React, { PureComponent } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Project Assets
import CategoryContainer from '../../containers/CategoryContainer';
import Header from '../Header';
import HomeContainer from '../../containers/HomeContainer';
import PostContainer from '../../containers/PostContainer';
import './App.css';

const propTypes = {
  getCategories: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
};

class App extends PureComponent {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <div className="container container-small">
            <Route exact path="/" component={HomeContainer} />
            <Route path="/posts/:postId" render={({ match }) => (
              <PostContainer postId={match.params.postId} />
            )} />
            <Route path="/categories/:category" render={({ match }) =>
              <CategoryContainer category={match.params.category} />
            } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = propTypes;

export default App;
