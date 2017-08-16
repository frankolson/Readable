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
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getCategoriesPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

// Post API calls

export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())

export const getPostComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const postPost = (params) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

export const postPostVote = (postId, params) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

export const putPost = (postId, params) =>
  fetch(`${api}/posts/${postId}`, {
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

export const postCommentVote = (commentId, params) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())

export const putComment = (commentId, params) =>
  fetch(`${api}/comment/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => res.json())
