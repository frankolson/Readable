// Vendor Assets
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Project Assets
import categories from './categoriesReducer';

export default combineReducers({
  categories,
  routing: routerReducer
});
