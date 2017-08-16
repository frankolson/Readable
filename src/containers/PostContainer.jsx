// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Post from '../components/Post';
import { getCurrentPost } from '../actions/currentPostActions';
import { getPostComments } from '../actions/postCommentsActions';

const mapStateToProps = ({ postComments, currentPost }, { postId }) => ({
  comments: postComments,
  post: currentPost,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  getPost: data => dispatch(getCurrentPost(data)),
  getPostComments: data => dispatch(getPostComments(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
