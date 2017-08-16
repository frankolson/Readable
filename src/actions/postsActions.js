import * as actionTypes from '../constants/postsConstants';
import * as api from '../utils/api';

export const getPosts = () => {
  return dispatch => api.getPosts()
    .then(posts => {
      dispatch({
        type: actionTypes.ADD_POSTS,
        posts,
      });
    });
}
