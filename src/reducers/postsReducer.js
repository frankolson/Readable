import * as actionTypes from '../constants/postsConstants';

export default function reducer(state={}, action) {
  switch (action.type) {
    case actionTypes.ADD_POSTS:
      return action.posts
    case actionTypes.UPDATE_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      }
    default:
      return state;
  }
}
