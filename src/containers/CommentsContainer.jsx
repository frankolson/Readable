// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Comments from '../components/Comments';
import {
  deleteComment,
  downVoteComment,
  getCurrentComment,
  upVoteComment,
} from '../actions/currentCommentActions';

const mapStateToProps = ({ postComments, currentPost }, { postId }) => ({
  comments: postComments,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  deleteComment: data => dispatch(deleteComment(data)),
  downVoteComment: data => dispatch(downVoteComment(data)),
  editComment: data => dispatch(getCurrentComment(data)),
  upVoteComment: data => dispatch(upVoteComment(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
