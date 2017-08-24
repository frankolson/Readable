// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Comments from '../components/Comments';
import { deleteComment, getCurrentComment } from '../actions/currentCommentActions';

const mapStateToProps = ({ postComments, currentPost }, { postId }) => ({
  comments: postComments,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  deleteComment: data => dispatch(deleteComment(data)),
  editComment: data => dispatch(getCurrentComment(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
