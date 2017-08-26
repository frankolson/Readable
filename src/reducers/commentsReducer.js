import * as actionTypes from '../constants/commentsConstants';

export default function reducer(state={}, action) {
  switch (action.type) {
    case actionTypes.ADD_POST_COMMENTS:
      return Object.assign({}, state, action.comments)
    default:
      return state;
  }
}
