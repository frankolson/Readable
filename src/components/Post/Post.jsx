// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Project Assets
import Comment from '../Comment';

const propTypes = {
  clearCurrentPost: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
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

      const renderedComments = this.props.comments.map(comment =>
        <Comment
          key={comment.id}
          comment={comment}
        />
      );

      return (
        <div>
          <h1>{title}</h1>
          <p>{moment(timestamp).format('D MMM YYYY')}</p>
          <p>{`votes: ${voteScore}`}</p>
          <p>{author}</p>

          <hr />

          <p>{body}</p>

          <br /><br /><br />

          {(this.props.comments.length > 0)
            ? renderedComments
            : <p>There are no comments</p>
          }
        </div>
      );
    } else {
      return(null);
    }
  }
}

Post.propTypes = propTypes;

export default Post;
