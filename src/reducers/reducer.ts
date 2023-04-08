import {ActionTypes } from "./actions";


export interface Cycle {
    id: number;
    name: string;
    photo: string;
    price: number,
    quantity?: number;
}

export const initialState = {
  myList: []
};

export const globalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    default:
      return state;
  }
};