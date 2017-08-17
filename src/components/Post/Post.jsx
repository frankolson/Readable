// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const propTypes = {
  clearCurrentPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
  postId: PropTypes.string.isRequired,
}

class Post extends PureComponent {
  componentDidMount() {
    this.props.getPost(this.props.postId);
    this.props.getPostComments(this.props.postId);
  }

  componentWillUnmount() {
    this.props.clearCurrentPost();
  }

  render() {
    if (this.props.post) {
      const { author, body, timestamp, title, voteScore } = this.props.post;

      return (
        <div>
          <div className="post-info mb-3">
            <div className="post-author">{author}</div>
            <div className="post-time-score text-secondary">
              {`${moment(timestamp).format('D MMM YYYY')} ~ ${voteScore} points`}
            </div>
          </div>

          <h1 className="post-title mb-5">{title}</h1>

          <p className="post-body mb-5">{body}</p>
        </div>
      );
    } else {
      return(null);
    }
  }
}

Post.propTypes = propTypes;

export default Post;
