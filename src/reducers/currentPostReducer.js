import * as actionTypes from '../constants/currentPostConstants';

export default function reducer(state=null, action) {
  switch (action.type) {
    case actionTypes.ADD_CURRENT_POST:
      return action.post
    default:
      return state;
  }
}
