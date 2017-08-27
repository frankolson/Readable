// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Comments from '../components/Comments';
import { toggleCommentDateSort } from '../actions/commentsActions';
import {
  deleteComment,
  downVoteComment,
  getCurrentComment,
  upVoteComment,
} from '../actions/currentCommentActions';

const mapStateToProps = ({ comments, currentPost, sort }, { postId }) => ({
  comments: Object.keys(comments)
                  .map(comment => comments[comment])
                  .filter(comment => comment.deleted === false)
                  .filter(comment => comment.parentId === postId),
  dateSort: sort.dateCommentSort,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  deleteComment: data => dispatch(deleteComment(data)),
  downVoteComment: data => dispatch(downVoteComment(data)),
  editComment: data => dispatch(getCurrentComment(data)),
  toggleCommentDateSort: () => dispatch(toggleCommentDateSort()),
  upVoteComment: data => dispatch(upVoteComment(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
