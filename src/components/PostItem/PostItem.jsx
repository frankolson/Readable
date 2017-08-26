// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Project Assets
import Score from '../Score';

const propTypes = {
  downVotePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
  upVotePost: PropTypes.func.isRequired,
};

class PostItem extends PureComponent {
  render() {
    const { downVotePost, post, upVotePost } = this.props;

    return(
      <div className="mb-3">
        <Link to={`/posts/show/${post.id}`}>{post.title}</Link>
        <div className="text-secondary">
          {`${post.author} | `}
          <Score
            downVote={downVotePost}
            entity={post}
            upVote={upVotePost}
          />
        </div>
      </div>
    );
  }
}

PostItem.propTypes = propTypes;

export default PostItem;
