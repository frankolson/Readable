// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import PostForm from '../components/PostForm';
import * as currentPostActions from '../actions/currentPostActions';
import { getCategories } from '../actions/categoryActions';
import { clearCurrentPost, getCurrentPost } from '../actions/currentPostActions';

const mapStateToProps = ({ categories, currentPost }, { postId, isNew }) => ({
  categories: Object.keys(categories).map(category => categories[category]),
  isNew: isNew ? true : false,
  post: currentPost,
  postId,
})

const mapDispatchToProps = (dispatch) => ({
  clearPost: data => dispatch(clearCurrentPost(data)),
  getCategories: () => dispatch(getCategories()),
  getPost: data => dispatch(getCurrentPost(data)),
  handleSubmit: data =>dispatch(currentPostActions.postPost(data)),
  handleUpdate: data =>dispatch(currentPostActions.putPost(data)),
  updateCurentPostTitle: data => dispatch(currentPostActions.updateCurentPostTitle(data)),
  updateCurentPostAuthor: data => dispatch(currentPostActions.updateCurentPostAuthor(data)),
  updateCurentPostCategory: data => dispatch(currentPostActions.updateCurentPostCategory(data)),
  updateCurentPostBody: data => dispatch(currentPostActions.updateCurentPostBody(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
