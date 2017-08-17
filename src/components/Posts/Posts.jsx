// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

class Posts extends PureComponent {
  render() {
    const { posts } = this.props;

    return(
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
    );
  }
}

Posts.propTypes = propTypes;

export default Posts;
