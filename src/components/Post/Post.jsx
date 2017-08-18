// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const propTypes = {
  clearCurrentPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
    deleted: PropTypes.bool,
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
    voteScore: PropTypes.number,
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
      const { author, body, id, timestamp, title, voteScore } = this.props.post;

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

          <div className="mb-2 d-flex justify-content-end">
            <Link to={`/posts/edit/${id}`} className="btn btn-link text-secondary">
              Edit
            </Link>
            <a href="#" className="btn btn-link text-secondary">Delete</a>
          </div>
        </div>
      );
    } else {
      return(null);
    }
  }
}

Post.propTypes = propTypes;

export default Post;
