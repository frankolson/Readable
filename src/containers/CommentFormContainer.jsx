// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import CommentForm from '../components/CommentForm';
import {
  postComment,
  updateComment,
  updateCurentCommentAuthor,
  updateCurentCommentBody,
} from '../actions/currentCommentActions';


const mapStateToProps = ({ categories, currentComment }, { postId }) => ({
  postId,
  comment: currentComment,
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: data => dispatch(postComment(data)),
  handleUpdate: data => dispatch(updateComment(data)),
  updateCurentCommentAuthor: data => dispatch(updateCurentCommentAuthor(data)),
  updateCurentCommentBody: data => dispatch(updateCurentCommentBody(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
