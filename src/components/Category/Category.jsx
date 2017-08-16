// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};

class Category extends PureComponent {
  render() {
    const { category, posts } = this.props;
    return (
      <div>
        <div>
          <h1>{category}</h1>
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

Category.propTypes = propTypes;

export default Category;
