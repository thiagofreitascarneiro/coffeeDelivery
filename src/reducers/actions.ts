export const ADD_TO_LIST = "ADD_TO_LIST";

export interface Cycle {
  id: number;
  name: string;
  photo: string;
  price: number,
  quantity: number;
  
}

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    REMOVE_CYCLE = 'REMOVE_CYCLE',
    ADD_QUANTITY = 'ADD_QUANTITY',
    REMOVE_QUANTITY = 'REMOVE_QUANTITY'
}

export const addToCart = (item: Cycle) => {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: item,
  }
};

export const removeFromCart = (id: number) => {
  return {
    type: ActionTypes.REMOVE_CYCLE,
    payload: id,
  }
}

export const updateAddQuantity = (id: number) => {
  return {
    type: ActionTypes.ADD_QUANTITY,
    payload: id,
  }
}

export const updateRemoveQuantity = (id: number) => {
  return {
    type: ActionTypes.REMOVE_QUANTITY,
    payload: id,
  }
}