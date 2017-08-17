// Vendor Assets
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Project Assets
import categories from './categoriesReducer';
import currentComment from './currentCommentReducer';
import currentPost from './currentPostReducer';
import posts from './postsReducer';
import postComments from './postCommentsReducer';

export default combineReducers({
  categories,
  currentComment,
  currentPost,
  posts,
  postComments,
  routing: routerReducer
});
