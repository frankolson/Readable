import * as commentsActionTypes from '../constants/commentsConstants';
import * as sortActionTypes from '../constants/sortConstants';
import * as api from '../utils/api';

export const getComments = (postId) => {
  return dispatch => api.getComments(postId)
    .then(comments => {
      dispatch({
        type: commentsActionTypes.ADD_POST_COMMENTS,
        comments: comments.reduce((accumulator, comment) => ({
          ...accumulator,
          [comment.id]: { ...comment },
        }), {}),
      });
    });
}

export const toggleCommentDateSort = () => {
  return {
    type: sortActionTypes.TOGGLE_COMMENT_DATE_SORT,
  }
}
