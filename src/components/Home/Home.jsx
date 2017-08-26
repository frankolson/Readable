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
  dateSort: PropTypes.bool.isRequired,
  getCategories: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  togglePostDateSort: PropTypes.func.isRequired,
};

class Home extends PureComponent {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { categories, dateSort, posts, togglePostDateSort } = this.props;
    return (
      <div>
        <div className="mb-4">
          <div className="text-center">
            <h1 className="mb-4">Categories:</h1>

            <div className="row d-flex justify-content-around">
              {categories.map(category =>
                <div className="col-sm-4 mb-3" key={category.path}>
                  <Link
                    className="btn btn-outline-primary btn-lg"
                    to={`/categories/${category.path}`}
                  >
                    {category.name}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <Posts
          dateSort={dateSort}
          posts={posts}
          togglePostDateSort={togglePostDateSort}
        />
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
