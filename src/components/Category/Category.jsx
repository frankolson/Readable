// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import Posts from '../Posts';

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

        <Posts posts={posts} />
      </div>
    );
  }
}

Category.propTypes = propTypes;

export default Category;
