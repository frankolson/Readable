import * as actionTypes from '../constants/commentsConstants';

export default function reducer(state={}, action) {
  switch (action.type) {
    case actionTypes.ADD_POST_COMMENTS:
      return Object.assign({}, state, action.comments)
    case actionTypes.UPDATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment,
      }
    default:
      return state;
  }
}
