// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Post from '../components/Post';
import { getCurrentPost, clearCurrentPost } from '../actions/currentPostActions';
import { getPostComments } from '../actions/postCommentsActions';
import { deletePost } from '../actions/postsActions';
import { downVotePost, upVotePost } from '../actions/currentPostActions';

const mapStateToProps = ({ postComments, currentPost }, { postId }) => ({
  post: currentPost,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  clearCurrentPost: data => dispatch(clearCurrentPost(data)),
  deletePost: data => dispatch(deletePost(data)),
  downVotePost: data => dispatch(downVotePost(data)),
  getPost: data => dispatch(getCurrentPost(data)),
  getPostComments: data => dispatch(getPostComments(data)),
  upVotePost: data => dispatch(upVotePost(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
