import * as actionTypes from '../constants/categoriesConstants';

export default function reducer(state=[], action) {
  switch (action.type) {
    case actionTypes.ADD_CATEGORIES:
      return action.categories
    default:
      return state;
  }
}
