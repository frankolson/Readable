import * as actionTypes from '../constants/currentCommentConstants';
import * as api from '../utils/api';
import * as commentsActions from './commentsActions';

export const clearCurrentComment = () => ({
  type: actionTypes.CLEAR_CURRENT_COMMENT
})

export const getCurrentComment = (commentId) => {
  return dispatch => api.getComment(commentId)
    .then(comment => {
      dispatch({
        type: actionTypes.ADD_CURRENT_COMMENT,
        comment,
      });
    });
}

export const deleteComment = (comment) => {
  return dispatch => api.deleteComment(comment.id)
    .then(() => {
      dispatch(commentsActions.getComments(comment.parentId));
    });
}

export const downVoteComment = (comment) => {
  return dispatch => api.postCommentVote(comment.id, "downVote")
  .then(res =>
    dispatch(commentsActions.getComments(comment.parentId))
  );
}

export const postComment = (comment) => {
  return dispatch => api.postComment(comment)
  .then((comment) => {
    dispatch(commentsActions.getComments(comment.parentId));
    dispatch(clearCurrentComment());
  });
}

export const updateComment = (comment) => {
  return dispatch => api.putComment(comment)
    .then((comment) => {
      dispatch(commentsActions.getComments(comment.parentId));
      dispatch(clearCurrentComment());
    });
}

export const updateCurentCommentAuthor = (author) => ({
  type: actionTypes.UPDATE_CURRENT_COMMENT_AUTHOR,
  author,
})

export const updateCurentCommentBody = (body) => ({
  type: actionTypes.UPDATE_CURRENT_COMMENT_BODY,
  body,
})

export const upVoteComment = (comment) => {
  return dispatch => api.postCommentVote(comment.id, "upVote")
  .then(res =>
    dispatch(commentsActions.getComments(comment.parentId))
  );
}
