// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Project Assets
import Comment from '../Comment';
import CommentFormContainer from '../../containers/CommentFormContainer';

const propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
}

class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.dateSort = this.dateSort.bind(this);
  }

  dateSort() {
    return this.props.comments.sort((a, b) => b.timestamp - a.timestamp);
  }

  render() {
    const { comments } = this.props;

    const renderedComments = this.dateSort().map(comment =>
      <Comment
        key={comment.id}
        comment={comment}
      />
    );

    return (
      <div>
        <hr />

        <CommentFormContainer postId={this.props.postId} />

        {(comments.length > 0)
          ? renderedComments
          : <p>There are no comments</p>
        }
      </div>
    );
  }
}

Comments.propTypes = propTypes;

export default Comments;
