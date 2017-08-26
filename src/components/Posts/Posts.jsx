// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import * as sort from '../../utils/sort';
import PostItemContainer from '../../containers/PostItemContainer';

const propTypes = {
  posts: PropTypes.array.isRequired,
};

class Posts extends PureComponent {
  render() {
    const { posts } = this.props;

    return(
      <div>
        <b>Posts:</b>
        {sort.dateDescending(posts).map(post =>
          <PostItemContainer key={post.id} post={post} />
        )}
      </div>
    );
  }
}

Posts.propTypes = propTypes;

export default Posts;
