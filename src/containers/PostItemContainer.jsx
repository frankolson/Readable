// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import PostItem from '../components/PostItem';
import { getComments } from '../actions/commentsActions';
import { downVotePost, upVotePost } from '../actions/currentPostActions';

const mapStateToProps = ({ comments, posts }, { post }) => ({
  comments: Object.keys(comments)
                  .map(comment => comments[comment])
                  .filter(comment => comment.parentId === post.id),
  post: posts[post.id],
})

const mapDispatchToProps = (dispatch) => ({
  downVotePost: data => dispatch(downVotePost(data)),
  getComments: data => dispatch(getComments(data)),
  upVotePost: data => dispatch(upVotePost(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostItem));
