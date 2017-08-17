// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Post from '../components/Post';
import { getCurrentPost, clearCurrentPost } from '../actions/currentPostActions';
import { getPostComments } from '../actions/postCommentsActions';

const mapStateToProps = ({ postComments, currentPost }, { postId }) => ({
  post: currentPost,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  clearCurrentPost: data => dispatch(clearCurrentPost(data)),
  getPost: data => dispatch(getCurrentPost(data)),
  getPostComments: data => dispatch(getPostComments(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
