import { ActionTypes } from "./actions";

export interface StatePayment {
    payment: string;
  }
  

export const initialStatePayment: StatePayment = {
    payment:  '',
};
  

export const globalReducerPayment = (state: StatePayment, action: any) => {
    
    switch (action.type) {
      case ActionTypes.SET_PAYMENT:
        return {       
          ...state,
          payment: action.payload,
        };
      default:
        return state;
    }
    
  };