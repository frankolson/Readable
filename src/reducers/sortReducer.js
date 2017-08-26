import * as actionTypes from '../constants/sortConstants';

const initialState = {
  dateCommentSort: true,
  datePostSort: true,
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_COMMENT_DATE_SORT:
      return {...state, dateCommentSort: !state.dateCommentSort}
    case actionTypes.TOGGLE_POST_DATE_SORT:
      return {...state, datePostSort: !state.datePostSort}
    default:
      return state;
  }
}
