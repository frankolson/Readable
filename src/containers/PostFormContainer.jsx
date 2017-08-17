// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import PostForm from '../components/PostForm';
import * as currentPostActions from '../actions/currentPostActions';

const mapStateToProps = ({ categories, currentPost }) => ({
  categories,
  post: currentPost,
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: data =>dispatch(currentPostActions.postPost(data)),
  updateCurentPostTitle: data => dispatch(currentPostActions.updateCurentPostTitle(data)),
  updateCurentPostAuthor: data => dispatch(currentPostActions.updateCurentPostAuthor(data)),
  updateCurentPostCategory: data => dispatch(currentPostActions.updateCurentPostCategory(data)),
  updateCurentPostBody: data => dispatch(currentPostActions.updateCurentPostBody(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
