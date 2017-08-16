// Vendor Assets
import React, { PureComponent } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Project Assets
import HomeContainer from '../../containers/HomeContainer'
import Post from '../Post'
import logo from '../../logo.svg';
import './App.css';

const propTypes = {
  getCategories: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

class App extends PureComponent {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Readable</h2>
          <h5>A blogging site for those who like it simple</h5>
        </div>

        <div className="App-intro">
          <BrowserRouter>
            <div>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/posts/:postId" render={({ match }) => {
                const post = posts.find(p => p.id === match.params.postId)

                return(
                  <div>
                    {post && <Post post={post} />}
                  </div>
                );
              }} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
