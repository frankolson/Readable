import * as actionTypes from '../constants/currentCommentConstants';
import * as api from '../utils/api';

export const getCurrentComment = (commentId) => {
  return dispatch => api.getComment(commentId)
    .then(comment => {
      dispatch({
        type: actionTypes.ADD_CURRENT_COMMENT,
        comment,
      });
    });
}

export const clearCurrentComment = () => ({
  type: actionTypes.CLEAR_CURRENT_COMMENT
})

export const updateCurentCommentAuthor = (author) => ({
  type: actionTypes.UPDATE_CURRENT_COMMENT_AUTHOR,
  author,
})

export const updateCurentCommentBody = (body) => ({
  type: actionTypes.UPDATE_CURRENT_COMMENT_BODY,
  body,
})
