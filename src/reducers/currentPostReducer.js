// Project Assets
import * as actionTypes from '../constants/currentPostConstants';

const initialState = {
  author: '',
  body: '',
  category: 'react',
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
    default:
      return state;
  }
}
