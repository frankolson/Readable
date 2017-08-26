// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import Posts from '../Posts';

const propTypes = {
  categoryPath: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
  getCategories: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

class Category extends PureComponent {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { categories, categoryPath, posts } = this.props;
    const category = categories.find(c => c.path === categoryPath)

    if (!category) return null;

    return (
      <div>
        <div>
          <h1>{category.name}</h1>
        </div>

        <Posts posts={posts.filter(p => p.category === category.name)} />
      </div>
    );
  }
}

Category.propTypes = propTypes;

export default Category;
