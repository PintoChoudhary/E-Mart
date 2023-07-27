// favoritesReducer.js

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../constants/action-types";
const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      // Check if the item is already in favorites
      if (state.favorites.includes(action.payload)) {
        return state; // If it is, return the current state without any changes
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload], // Add the new item to the favorites array
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.payload), // Remove the item from favorites array
      };
    default:
      return state;
  }
};

export default favoritesReducer;
