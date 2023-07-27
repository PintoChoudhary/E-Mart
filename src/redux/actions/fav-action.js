// favoritesActions.js

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../constants/action-types";
export const addToFavorites = (item) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: item,
  };
};

export const removeFromFavorites = (item) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: item,
  };
};
