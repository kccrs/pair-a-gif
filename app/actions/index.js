import { types } from './actionTypes';

export const actionCreators = {
  searchGiphy: (data) => {
    return {
      type: types.SEARCH_GIPHY,
      data: data
    };
  }
};
