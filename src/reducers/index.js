// Vendor Assets
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Project Assets
import categories from './categoriesReducer';
import posts from './postsReducer';

export default combineReducers({
  categories,
  posts,
  routing: routerReducer
});
