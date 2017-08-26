// Vendor Assets
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Project Assets
import categories from './categoryReducer';
import currentComment from './currentCommentReducer';
import currentPost from './currentPostReducer';
import posts from './postsReducer';
import comments from './commentsReducer';
import sort from './sortReducer';

export default combineReducers({
  categories,
  currentComment,
  currentPost,
  posts,
  comments,
  routing: routerReducer,
  sort,
});
