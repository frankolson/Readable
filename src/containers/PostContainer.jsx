// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import Post from '../components/Post';
import { getCurrentPost } from '../actions/currentPostActions';

const mapStateToProps = ({ comments, currentPost }, { postId }) => ({
  comments,
  post: currentPost,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  getPost: data => dispatch(getCurrentPost(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
