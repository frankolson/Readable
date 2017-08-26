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
  dateSort: PropTypes.bool.isRequired,
  getCategories: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  togglePostDateSort: PropTypes.func.isRequired,
};

class Category extends PureComponent {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const {
      categories, categoryPath, dateSort,
      posts, togglePostDateSort
    } = this.props;
    const category = categories.find(c => c.path === categoryPath)

    if (!category) return null;

    return (
      <div>
        <div className="text-center">
          <h1>{category.name}</h1>
        </div>

        <Posts
          dateSort={dateSort}
          posts={posts.filter(p => p.category === category.name)}
          togglePostDateSort={togglePostDateSort}
        />
      </div>
    );
  }
}

Category.propTypes = propTypes;

export default Category;
