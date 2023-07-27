import { ActionTypes } from "../constants/action-types";

const initialState = {
  numberCart: 0,
  Carts: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const itemIndex = state.Carts.findIndex((item) => item.id === payload.id);

      if (itemIndex !== -1) {
        const updatedCarts = [...state.Carts];
        updatedCarts[itemIndex].quantity++;
        return {
          ...state,
          Carts: updatedCarts,
          numberCart: state.numberCart + 1,
        };
      } else {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        return {
          ...state,
          Carts: [...state.Carts, newItem],
          numberCart: state.numberCart + 1,
        };
      }


    case ActionTypes.GET_NUMBER_CART:
      return state;

    case ActionTypes.DELETE_ITEM:
      return {
        ...state,
        Carts: state.Carts.filter((item) => item.id !== payload.id),
        numberCart: state.numberCart - payload.quantity,
      };

    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        Carts: [],
        numberCart: 0,
      };

    case ActionTypes.DECREMENT_QUANTITY:
      const updatedCarts = state.Carts.map((item) =>
        item.id === payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        Carts: updatedCarts,
        numberCart: state.numberCart - 1,
      };
    default:
      return state;
  }
};
