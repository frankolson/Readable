// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import Comment from '../Comment';

const propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
}

class Comments extends PureComponent {
  render() {
    const renderedComments = this.props.comments.map(comment =>
      <Comment
        key={comment.id}
        comment={comment}
      />
    );

    return (
      <div>
        <hr />

        {(this.props.comments.length > 0)
          ? renderedComments
          : <p>There are no comments</p>
        }
      </div>
    );
  }
}

Comments.propTypes = propTypes;

export default Comments;
