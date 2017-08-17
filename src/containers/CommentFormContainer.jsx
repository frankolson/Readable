// Vendor Assets
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Project Assets
import CommentForm from '../components/CommentForm';
import * as currentCommentActions from '../actions/currentCommentActions';

const mapStateToProps = ({ categories, currentComment }, {postId}) => ({
  postId,
  comment: currentComment,
})

const mapDispatchToProps = (dispatch) => ({
  updateCurentCommentAuthor: data => dispatch(currentCommentActions.updateCurentCommentAuthor(data)),
  updateCurentCommentBody: data => dispatch(currentCommentActions.updateCurentCommentBody(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
