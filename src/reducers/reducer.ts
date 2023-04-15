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
    default:
      return state;
  }
  
};