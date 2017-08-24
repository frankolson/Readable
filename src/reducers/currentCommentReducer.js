// Project Assets
import * as actionTypes from '../constants/currentCommentConstants';

const initialState = {
  author: '',
  deleted: null,
  body: '',
  id: null,
  parentDeleted: null,
  parentId: null,
  timestamp: null,
  voteScore: null,
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CURRENT_COMMENT:
      return action.comment
    case actionTypes.CLEAR_CURRENT_COMMENT:
      return initialState
    case actionTypes.UPDATE_CURRENT_COMMENT_AUTHOR:
      return {
        ...state,
        author: action.author,
      }
    case actionTypes.UPDATE_CURRENT_COMMENT_BODY:
      return {
        ...state,
        body: action.body,
      }
    default:
      return state;
  }
}
