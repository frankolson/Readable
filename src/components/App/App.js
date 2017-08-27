// Vendor Assets
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Project Assets
import CategoryContainer from '../../containers/CategoryContainer';
import CommentsContainer from '../../containers/CommentsContainer';
import Header from '../Header';
import HomeContainer from '../../containers/HomeContainer';
import NotFound from '../NotFound';
import PostContainer from '../../containers/PostContainer';
import PostFormContainer from '../../containers/PostFormContainer';
import './App.css';

const propTypes = {
  clearCurrentPost: PropTypes.func.isRequired,
  getCurrentPost: PropTypes.func.isRequired,
};

class App extends PureComponent {
  render() {
    return (
      <div>
        <Route path="/" component={Header} />

        <Switch>
          <Route exact path="/" render={() => (
            <div className="container container-small">
              <HomeContainer />
            </div>
          )} />

          <Route path="/categories/:category" render={({ match }) => (
            <div className="container container-small">
              <CategoryContainer categoryPath={match.params.category} />
            </div>
          )} />

          <Route path="/posts/new" render={() => {
            this.props.clearCurrentPost();
            return (
              <div className="container container-small">
                <PostFormContainer />
              </div>
            );
          }} />

          <Route path="/posts/edit/:postId" render={({ match }) => {
              this.props.getCurrentPost(match.params.postId);
              return (
                <div className="container container-small">
                  <PostFormContainer postId={match.params.postId} />
                </div>
              );
          }} />

          <Route path="/posts/show/:postId" render={({ match }) => (
            <div>
              <div className="container container-small">
                <PostContainer postId={match.params.postId} />
              </div>
              <CommentsContainer postId={match.params.postId} />
            </div>
          )} />

          <Route render={() => <NotFound type="page" />} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
