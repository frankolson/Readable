import * as actionTypes from '../constants/categoriesConstants';
import * as api from '../utils/api';

export const getCategories = () => {
  return dispatch => api.getCategories()
    .then(categories => {
      dispatch({
        type: actionTypes.ADD_CATEGORIES,
        categories: categories.reduce((accumulator, category) => ({
          ...accumulator,
          [category.name]: {
            name: category.name,
            path: category.path,
          }
        }), {}),
      });
    });
}
