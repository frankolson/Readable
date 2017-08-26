// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import * as sort from '../../utils/sort';
import PostItemContainer from '../../containers/PostItemContainer';

const propTypes = {
  dateSort: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
};

class Posts extends PureComponent {
  constructor(props) {
    super(props);

    this.sortOrder = this.sortOrder.bind(this);
  }

  sortOrder(posts) {
    if (this.props.dateSort) {
      return sort.dateDescending(posts)
    } else {
      return sort.scoreDescending(posts)
    }
  }

  render() {
    const { posts } = this.props;
    const renderedPosts = this.sortOrder(posts).map(post =>
      <PostItemContainer key={post.id} post={post} />
    );

    return(
      <div>
        <hr />
        {(posts.length > 0)
          ? renderedPosts
          : <p className="text-center">
              There are no posts here, you could be the first!
            </p>
        }
      </div>
    );
  }
}

Posts.propTypes = propTypes;

export default Posts;
