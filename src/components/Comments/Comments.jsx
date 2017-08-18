// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import Comment from '../Comment';
import CommentFormContainer from '../../containers/CommentFormContainer';
import * as sort from '../../utils/sort';
import './Comments.css';

const propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
}

class Comments extends PureComponent {
  render() {
    const { comments } = this.props;

    const renderedComments = sort.dateDescending(comments).map(comment =>
      <Comment
        key={comment.id}
        comment={comment}
      />
    );

    return (
      <div className="comments-section border pt-4">

        <div className="container container-small">
          <CommentFormContainer postId={this.props.postId} />

          {(comments.length > 0)
            ? renderedComments
            : <p className="text-center">
                There are no comments, you could be the first!
              </p>
          }
        </div>
      </div>
    );
  }
}

Comments.propTypes = propTypes;

export default Comments;
