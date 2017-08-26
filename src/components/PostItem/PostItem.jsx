// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Project Assets
import Score from '../Score';

const propTypes = {
  comments: PropTypes.array.isRequired,
  downVotePost: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
  upVotePost: PropTypes.func.isRequired,
};

class PostItem extends PureComponent {
  componentDidMount() {
    this.props.getComments(this.props.post.id);
  }

  render() {
    const { comments, downVotePost, post, upVotePost } = this.props;

    return(
      <div className="mb-3">
        <Link to={`/posts/show/${post.id}`}>{post.title}</Link>
        <div className="text-secondary">
          {post.author}
          <span className="m-2">|</span>
          <Score
            downVote={downVotePost}
            entity={post}
            upVote={upVotePost}
          />
          <span className="m-2">|</span>
          {`${comments.length} comment${(comments.length !== 1) ? 's' : ''}`}
        </div>
      </div>
    );
  }
}

PostItem.propTypes = propTypes;

export default PostItem;
