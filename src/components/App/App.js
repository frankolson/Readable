// Vendor Assets
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

// Project Assets
import CategoryContainer from '../../containers/CategoryContainer';
import Header from '../Header';
import HomeContainer from '../../containers/HomeContainer';
import NotFound from '../NotFound';
import PostContainer from '../../containers/PostContainer';
import PostFormContainer from '../../containers/PostFormContainer';
import './App.css';

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

          <Route path="/posts/new" render={() => (
            <div className="container container-small">
              <PostFormContainer isNew/>
            </div>
          )} />

          <Route path="/:category/:postId/edit" render={({ match }) => (
            <div className="container container-small">
              <PostFormContainer postId={match.params.postId} />
            </div>
          )} />

          <Route path="/:category/:postId" render={({ match }) => (
            <PostContainer postId={match.params.postId} />
          )} />

          <Route render={() => <NotFound type="page" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
