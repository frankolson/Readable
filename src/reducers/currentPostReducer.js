// Project Assets
import * as actionTypes from '../constants/currentPostConstants';

const initialState = {
  author: '',
  body: '',
  category: '',
  deleted: false,
  id: null,
  timestamp: null,
  title: '',
  voteScore: 0,
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CURRENT_POST:
      return action.post
    case actionTypes.CLEAR_CURRENT_POST:
      return initialState
    case actionTypes.UPDATE_CURRENT_POST_AUTHOR:
      return {
        ...state,
        author: action.author,
      }
    case actionTypes.UPDATE_CURRENT_POST_BODY:
      return {
        ...state,
        body: action.body,
      }
    case actionTypes.UPDATE_CURRENT_POST_CATEGORY:
      return {
        ...state,
        category: action.category,
      }
    case actionTypes.UPDATE_CURRENT_POST_TITLE:
      return {
        ...state,
        title: action.title,
      }
    default:
      return state;
  }
}
