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
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
};

class Comment extends PureComponent {
  render() {
    const { author, body, id, timestamp, voteScore } = this.props.comment;

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

          <h6 className="mt-2">
            <span className="text-muted">{`${voteScore} points`}</span>

            <div className="float-right">
              <button
                className="btn btn-link text-secondary"
                onClick={() => this.props.editComment(id)}
                style={{ cursor: "pointer" }}
              >
                Edit
              </button>

              <button
                className="btn btn-link text-secondary"
                onClick={() => this.props.deleteComment(this.props.comment)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </h6>
        </div>
      </div>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
