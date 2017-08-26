import * as actionTypes from '../constants/postCommentsConstants';
import * as api from '../utils/api';

export const getPostComments = (postId) => {
  return dispatch => api.getPostComments(postId)
    .then(comments => {
      dispatch({
        type: actionTypes.ADD_POST_COMMENTS,
        comments: comments.reduce((accumulator, comment) => ({
          ...accumulator,
          [comment.id]: { ...comment },
        }), {}),
      });
    });
}
