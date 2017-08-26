import * as actionTypes from '../constants/postsConstants';

export default function reducer(state={}, action) {
  switch (action.type) {
    case actionTypes.ADD_POSTS:
      return action.posts
    default:
      return state;
  }
}
