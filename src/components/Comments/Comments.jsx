// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import scrollToElement from 'scroll-to-element';

// Project Assets
import Comment from '../Comment';
import SortButton from '../SortButton';
import CommentFormContainer from '../../containers/CommentFormContainer';
import * as sort from '../../utils/sort';
import './Comments.css';

const propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  dateSort: PropTypes.bool.isRequired,
  toggleCommentDateSort: PropTypes.func.isRequired,
  upVoteComment: PropTypes.func.isRequired,
}

class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.editComment = this.editComment.bind(this);
    this.sortOrder = this.sortOrder.bind(this);
  }

  editComment(commentId) {
    this.props.editComment(commentId);
    scrollToElement('.comments-section', {
      offset: -100,
      duration: 500,
    });
  }

  sortOrder(comments) {
    if (this.props.dateSort) {
      return sort.dateDescending(comments)
    } else {
      return sort.scoreDescending(comments)
    }
  }

  render() {
    const { comments, dateSort, toggleCommentDateSort } = this.props;
    const renderedComments = this.sortOrder(comments).map(comment =>
      <Comment
        comment={comment}
        deleteComment={this.props.deleteComment}
        downVoteComment={this.props.downVoteComment}
        editComment={this.editComment}
        key={comment.id}
        upVoteComment={this.props.upVoteComment}
      />
    );

    return (
      <div className="comments-section border pt-4">

        <div className="container container-small">
          <CommentFormContainer postId={this.props.postId} />

          <div className="d-flex  justify-content-end">
            <SortButton
              dateSort={dateSort}
              handleChange={toggleCommentDateSort}
            />
          </div>

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
