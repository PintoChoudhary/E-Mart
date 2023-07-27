import { ActionTypes } from "../constants/action-types"

export const addToCart =(product)=> {
    return{
        type: ActionTypes.ADD_TO_CART,
        payload : product
    }
}
export const delItem =(product)=> {
    return{
        type: ActionTypes.DELETE_ITEM,
        payload : product
    }
}
export const clearCart = () => {
    return {
      type: ActionTypes.CLEAR_CART,
    };
  };
  export const decrementQuantity = (product) => {
    return {
      type: ActionTypes.DECREMENT_QUANTITY,
      payload: product,
    };
  };
  