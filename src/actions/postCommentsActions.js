import * as postCommentsActionTypes from '../constants/postCommentsConstants';
import * as sortActionTypes from '../constants/sortConstants';
import * as api from '../utils/api';

export const getPostComments = (postId) => {
  return dispatch => api.getPostComments(postId)
    .then(comments => {
      dispatch({
        type: postCommentsActionTypes.ADD_POST_COMMENTS,
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
