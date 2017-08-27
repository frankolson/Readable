// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Post from '../components/Post';
import { getCurrentPost } from '../actions/currentPostActions';
import { getComments } from '../actions/commentsActions';
import { deletePost } from '../actions/postsActions';
import { downVotePost, upVotePost } from '../actions/currentPostActions';

const mapStateToProps = ({ currentPost }, { postId }) => ({
  post: currentPost,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  deletePost: data => dispatch(deletePost(data)),
  downVotePost: data => dispatch(downVotePost(data)),
  getPost: data => dispatch(getCurrentPost(data)),
  getComments: data => dispatch(getComments(data)),
  upVotePost: data => dispatch(upVotePost(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
