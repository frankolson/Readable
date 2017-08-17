// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// Project Assets
import Posts from '../Posts';

class Home extends PureComponent {
  render() {
    const { categories, posts } = this.props;
    return (
      <div>
        <div>
          <b>Categories:</b>
          <ul>
            {Object.keys(categories).map(id =>
              <li key={id}>
                <Link to={`/categories/${categories[id].name}`}>
                  {categories[id].name}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <Posts posts={posts} />
      </div>
    );
  }
}

export default Home;
