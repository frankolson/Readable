// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Project Assets
import Score from '../Score';

const propTypes = {
  clearCurrentPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  downVotePost: PropTypes.func.isRequired,
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
  upVotePost: PropTypes.func.isRequired,
}

class Post extends PureComponent {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.props.getPost(this.props.postId);
    this.props.getComments(this.props.postId);
  }

  componentWillUnmount() {
    this.props.clearCurrentPost();
  }

  deletePost() {
    this.props.deletePost(this.props.post.id);
  }

  render() {
    if (this.props.post) {
      const { author, body, category, id, timestamp, title } = this.props.post;

      return (
        <div>
          <div className="post-info mb-3">
            <div className="post-author">{author}</div>
            <div className="post-time-score text-secondary">
              {`${moment(timestamp).format('D MMM YYYY')}`}
            </div>
          </div>

          <h1 className="post-title mb-5">{title}</h1>

          <p className="post-body mb-5">{body}</p>

          <div className="mb-2 d-flex justify-content-between">
            <Score
              downVote={this.props.downVotePost}
              entity={this.props.post}
              upVote={this.props.upVotePost}
            />

            <div>
              <Link to={`/${category}/${id}/edit`} className="btn btn-link text-secondary">
                Edit
              </Link>
              <button
                style={{ cursor: "pointer" }}
                onClick={this.deletePost}
                className="btn btn-link text-secondary"
              >
                Delete
              </button>
            </div>
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
