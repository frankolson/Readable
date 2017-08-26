// Vendor Assets
import { routerActions } from 'react-router-redux';

// Project Assets
import * as postActionTypes from '../constants/postsConstants';
import * as sortActionTypes from '../constants/sortConstants';
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
        type: postActionTypes.ADD_POSTS,
        posts: posts.reduce((accumulator, post) => ({
          ...accumulator,
          [post.id]: { ...post },
        }), {}),
      });
    });
}

export const togglePostDateSort = () => {
  return {
    type: sortActionTypes.TOGGLE_POST_DATE_SORT,
  }
}

export const updatePost = (post) => ({
  type: postActionTypes.UPDATE_POST,
  post,
})
