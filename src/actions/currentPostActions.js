// Vendor Assets
import { routerActions } from 'react-router-redux';

// Project Assets
import * as actionTypes from '../constants/currentPostConstants';
import * as api from '../utils/api';
import { updatePost } from './postsActions';

export const clearCurrentPost = () => ({
  type: actionTypes.CLEAR_CURRENT_POST
})

export const downVotePost = (post) => {
  return dispatch => api.postPostVote(post.id, "downVote")
  .then(res => {
    dispatch(getCurrentPost(post.id));
    dispatch(updatePost(res));
  });
}

export const getCurrentPost = (postId) => {
  return dispatch => api.getPost(postId)
    .then(post => {
      dispatch({
        type: actionTypes.ADD_CURRENT_POST,
        post,
      });
    });
}

export const postPost = (post) => {
  return dispatch => api.postPost(post)
    .then(post =>
      dispatch(clearCurrentPost())
    )
    .then(() =>
      dispatch(routerActions.push(`/posts/show/${post.id}`))
    );
}


export const putPost = (post) => {
  return dispatch => api.putPost(post)
    .then(post =>
      dispatch(clearCurrentPost())
    )
    .then(() =>
      dispatch(routerActions.push(`/posts/show/${post.id}`))
    );
}

export const updateCurentPostAuthor = (author) => ({
  type: actionTypes.UPDATE_CURRENT_POST_AUTHOR,
  author,
})

export const updateCurentPostBody = (body) => ({
  type: actionTypes.UPDATE_CURRENT_POST_BODY,
  body,
})

export const updateCurentPostCategory = (category) => ({
  type: actionTypes.UPDATE_CURRENT_POST_CATEGORY,
  category,
})

export const updateCurentPostTitle = (title) => ({
  type: actionTypes.UPDATE_CURRENT_POST_TITLE,
  title,
})

export const upVotePost = (post) => {
  return dispatch => api.postPostVote(post.id, "upVote")
  .then(res =>{
    dispatch(getCurrentPost(post.id));
    dispatch(updatePost(res));
  });
}
