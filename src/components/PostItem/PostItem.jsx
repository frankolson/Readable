// Vendor Assets
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

// Project Assets
import Score from '../Score';

const propTypes = {
  comments: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
  downVotePost: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
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
    const { comments, deletePost, downVotePost, post, upVotePost } = this.props;

    return(
      <div className="mb-3">
        <Link to={`/posts/show/${post.id}`}>{post.title}</Link>

        <div className="text-secondary">
          <Score
            downVote={downVotePost}
            entity={post}
            upVote={upVotePost}
          />

          <span className="m-2">|</span>

          {`by ${post.author} ${moment(post.timestamp).fromNow()}`}

          <span className="m-2">|</span>

          {`${comments.length} comment${(comments.length !== 1) ? 's' : ''}`}

          <span className="m-2">|</span>

          <Link to={`/posts/edit/${post.id}`} className="btn-link text-secondary">
            Edit
          </Link>

          <span className="m-2">|</span>

          <button
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}
            className="btn-link text-secondary"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = propTypes;

export default PostItem;
