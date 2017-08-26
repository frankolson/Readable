// Vendor Assets
import { routerActions } from 'react-router-redux';

// Project Assets
import * as actionTypes from '../constants/postsConstants';
import * as api from '../utils/api';

export const deletePost = (postId) => {
  return dispatch => api.deletePost(postId)
    .then(post =>
      dispatch(routerActions.push(`/`))
    );
}

export const getPosts = () => {
  return dispatch => api.getPosts()
    .then(posts => {
      dispatch({
        type: actionTypes.ADD_POSTS,
        posts: posts.reduce((accumulator, post) => ({
          ...accumulator,
          [post.id]: { ...post },
        }), {}),
      });
    });
}
