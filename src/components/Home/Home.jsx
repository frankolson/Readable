// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Project Assets
import Posts from '../Posts';

const propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
  getCategories: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

class Home extends PureComponent {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { categories, posts } = this.props;
    return (
      <div>
        <div className="mb-4">
          <b>Categories:</b>
          <div className="row">
            {categories.map(category =>
              <div className="col-sm-2" key={category.path}>
                <Link to={`/categories/${category.path}`}>
                  {category.name}
                </Link>
              </div>
            )}
          </div>
        </div>

        <Posts posts={posts} />
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
