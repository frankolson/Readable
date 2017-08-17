// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Project Assets
import './Comment.css'

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
      <div className="card mb-3">
        <div className="card-body">
          <div className="card-title inline-headers">
            <h4 className="mr-2">{author}</h4>
            <h6 className="text-secondary">{moment(timestamp).format('D MMM YYYY')}</h6>
          </div>

          <p className="card-text">{body}</p>

          <h6 className="card-subtitle mt-2 text-muted">
            {`votes: ${voteScore}`}

            <div className="float-right">
              <a href="#" className="card-link text-secondary">Edit</a>
              <a href="#" className="card-link text-secondary">Delete</a>
            </div>
          </h6>
        </div>
      </div>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
