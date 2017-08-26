// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import PostItem from '../components/PostItem';
import { getPostComments } from '../actions/postCommentsActions';
import { downVotePost, upVotePost } from '../actions/currentPostActions';

const mapStateToProps = ({ postComments, posts }, { post }) => ({
  post: posts[post.id],
  postComments,
})

const mapDispatchToProps = (dispatch) => ({
  downVotePost: data => dispatch(downVotePost(data)),
  getPostComments: data => dispatch(getPostComments(data)),
  upVotePost: data => dispatch(upVotePost(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostItem));
