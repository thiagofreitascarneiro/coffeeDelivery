import {ActionTypes } from "./actions";
import {Cycle} from "./actions"

export interface State {
  cartListProduct: Cycle[];
}

export const initialState: State = {
  cartListProduct: [],
  
};

export const globalReducer = (state: State, action: any) => {
  console.log(state);
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {       
        ...state,
        cartListProduct: [...state.cartListProduct, action.payload],
      };
    case ActionTypes.REMOVE_CYCLE:
      const newCoffeeList = state.cartListProduct.filter(
        (coffee) => coffee.id !== action.payload);
      return {
        ...state,
        cartListProduct: newCoffeeList,
      }   
    case ActionTypes.ADD_QUANTITY:
      const newList = state.cartListProduct.map((data) => {
        if (data.id === action.payload) {
          console.log(data.id)
          return {
            ...data,
            quantity: data.quantity + 1,
          };
        } else {
          return data;
        }
      });
      console.log('nova lista add', newList)
      return {
        ...state,
        cartListProduct: newList,
      };
    case ActionTypes.REMOVE_QUANTITY:
      const newListRemove = state.cartListProduct.map((data) => {
        if (data.id === action.payload && data.quantity > 1) {
          console.log(data.id)
          return {
            ...data,
            quantity: data.quantity - 1,
          };
        } else {
          return data;
        }
      });
      console.log('nova lista add', newListRemove)
      return {
        ...state,
        cartListProduct: newListRemove,
      };
    default:
      return state;
  }
  
};