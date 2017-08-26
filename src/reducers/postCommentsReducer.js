import * as actionTypes from '../constants/postCommentsConstants';

export default function reducer(state={}, action) {
  switch (action.type) {
    case actionTypes.ADD_POST_COMMENTS:
      return action.comments
    default:
      return state;
  }
}
