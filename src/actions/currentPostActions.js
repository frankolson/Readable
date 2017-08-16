import * as actionTypes from '../constants/currentPostConstants';
import * as api from '../utils/api';

export const getCurrentPost = (postId) => {
  return dispatch => api.getPost(postId)
    .then(post => {
      dispatch({
        type: actionTypes.ADD_CURRENT_POST,
        post,
      });
    });
}
