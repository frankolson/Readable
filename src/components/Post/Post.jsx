// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
}

class Post extends PureComponent {
  render() {
    const { author, body, timestamp, title, voteScore } = this.props.post;
    return (
      <div>
        <h1>{title}</h1>
        <p>{moment(timestamp).format('D MMM YYYY')}</p>
        <p>{`votes: ${voteScore}`}</p>
        <p>{author}</p>

        <hr />

        <p>{body}</p>
      </div>
    );
  }
}

Post.propTypes = propTypes;

export default Post;
