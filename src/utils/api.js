// Project Assets
import firebase from '../fire.js';

const api = "http://localhost:5001"

// Generate a unique token for the backend server authentication headers.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Category API calls

export const getCategories = () =>
  firebase.database().ref('/categories').once('value')
    .then(snapshot => snapshot.val())

export const getCategoriesPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

// Post API calls

export const deletePost = (postId) =>
  firebase.database().ref(`/posts/${postId}/deleted`).set(true)
    .then(() => getPost(postId))

export const getPost = (postId) =>
  firebase.database().ref(`/posts/${postId}`).once('value')
    .then(snapshot => snapshot.val())

export const getComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())

export const getPosts = () =>
  firebase.database().ref('/posts').once('value')
    .then(snapshot => snapshot.val())

export const postPost = (params) =>
  firebase.database().ref(`/posts/${params.id}`).set(params)
    .then(() => getPost(params.id))

export const postPostVote = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const putPost = (params) =>
  fetch(`${api}/posts/${params.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

// Comment API calls

export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())

export const getComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())

export const postComment = (params) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

export const postCommentVote = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())

export const putComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())
