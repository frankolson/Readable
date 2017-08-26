// Vendor Assets
import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

// Project Assets
import CategoryContainer from '../../containers/CategoryContainer';
import CommentsContainer from '../../containers/CommentsContainer';
import Header from '../Header';
import HomeContainer from '../../containers/HomeContainer';
import PostContainer from '../../containers/PostContainer';
import PostFormContainer from '../../containers/PostFormContainer';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Route path="/" component={Header} />

        <div className="container container-small">
          <Route exact path="/" render={() => {
            return <HomeContainer />;
          }} />

          <Route path="/categories/:category" render={({ match }) => {
            return <CategoryContainer categoryPath={match.params.category} />;
          }} />

          <Route path="/posts/new" component={PostFormContainer} />

          <Route path="/posts/edit/:postId" render={({ match }) => (
            <div>
              <PostFormContainer postId={match.params.postId} />
            </div>
          )} />

          <Route path="/posts/show/:postId" render={({ match }) => (
            <div>
              <PostContainer postId={match.params.postId} />
            </div>
          )} />
        </div>

        <Route path="/posts/show/:postId" render={({ match }) => (
          <div>
            <CommentsContainer postId={match.params.postId} />
          </div>
        )} />
      </div>
    );
  }
}

export default App;
