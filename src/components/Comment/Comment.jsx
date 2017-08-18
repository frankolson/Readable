// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Project Assets
import './Comment.css'

const propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    timestamp: PropTypes.number,
    voteScore: PropTypes.number,
  }),
};

const defaultProps = {
  comment: {
    author: null,
    body: null,
    id: null,
    timestamp: null,
    voteScore: null,
  },
};

class Comment extends PureComponent {
  render() {
    const { author, body, timestamp, voteScore } = this.props.comment;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="card-title inline-headers">
            <h4 className="mr-2">{author}</h4>
            <h6 className="text-secondary">
              {timestamp && moment(timestamp).format('D MMM YYYY')}
            </h6>
          </div>

          <p className="card-text">{body}</p>

          <h6 className="card-subtitle mt-2 text-muted">
            {`${voteScore} points`}

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
Comment.defaultProps = defaultProps;

export default Comment;
