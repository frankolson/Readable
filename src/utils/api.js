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
  firebase.database().ref('/posts').once('value')
    .then(snapshot => snapshot.val())
    .then(res =>
      Object.keys(res)
        .map(post => res[post])
        .filter(post => post.category === category)
    )

// Post API calls

export const deletePost = (postId) =>
  firebase.database().ref(`/posts/${postId}/deleted`).set(true)
    .then(() => getPost(postId))

export const getPost = (postId) =>
  firebase.database().ref(`/posts/${postId}`).once('value')
    .then(snapshot => snapshot.val())

export const getComments = (postId) =>
  firebase.database().ref('/comments').once('value')
    .then(snapshot => snapshot.val())
    .then(res =>
      Object.keys(res)
        .map(comment => res[comment])
        .filter(comment => comment.parentId === postId)
    )

export const getPosts = () =>
  firebase.database().ref('/posts').once('value')
    .then(snapshot => snapshot.val())

export const postPost = (params) =>
  firebase.database().ref(`/posts/${params.id}`).set(params)
    .then(() => getPost(params.id))

export const postPostVote = (post, option) => {
  const score = (option === "upVote")
    ? (post.voteScore + 1)
    : (post.voteScore - 1);

  return firebase.database().ref(`/posts/${post.id}/voteScore`).set(score)
    .then(() => getPost(post.id))
}

export const putPost = (params) =>
  firebase.database().ref(`/posts/${params.id}`).update(params)
    .then(() => getPost(params.id))

// Comment API calls

export const deleteComment = (commentId) =>
  firebase.database().ref(`/comments/${commentId}/deleted`).set(true)
    .then(() => getComment(commentId))

export const getComment = (commentId) =>
  firebase.database().ref(`/comments/${commentId}`).once('value')
    .then(snapshot => snapshot.val())

export const postComment = (params) =>
  firebase.database().ref(`/comments/${params.id}`).set(params)
    .then(() => getComment(params.id))

export const postCommentVote = (comment, option) => {
  const score = (option === "upVote")
    ? (comment.voteScore + 1)
    : (comment.voteScore - 1);

  return firebase.database().ref(`/comments/${comment.id}/voteScore`).set(score)
    .then(() => getPost(comment.id))
}

export const putComment = (params) =>
  firebase.database().ref(`/comments/${params.id}`).update(params)
    .then(() => getComment(params.id))
