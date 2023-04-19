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
        console.log(newCoffeeList);
        console.log(state);
      return {
        ...state,
        cartListProduct: newCoffeeList,
      }   
    default:
      return state;
  }
  
};