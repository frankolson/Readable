// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
}

class Comment extends PureComponent {
  render() {
    const { author, body, timestamp, voteScore } = this.props.comment;

    return (
      <div>
        <h3>{author}</h3>
        <p>{moment(timestamp).format('D MMM YYYY')}</p>
        <p>{`votes: ${voteScore}`}</p>
        <p>{body}</p>
      </div>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
