import {ActionTypes } from "./actions";
import {Cycle} from "./actions"

export interface State {
  cartListProduct: Cycle[];
}

export const initialState: State = {
  cartListProduct: [],
};

export const globalReducer = (state = initialState, action: any) => {
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