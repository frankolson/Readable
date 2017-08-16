// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    const { categories, posts } = this.props;
    return (
      <div>
        <div>
          <b>Categories:</b>
          <ul>
            {Object.keys(categories).map(id =>
              <li key={id}>{categories[id].name}</li>
            )}
          </ul>
        </div>

        <div>
          <b>Posts:</b>
          <ul>
            {posts.map(post =>
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link> ~ <i>{post.author}</i>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
