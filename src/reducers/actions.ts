export const ADD_TO_LIST = "ADD_TO_LIST";

export interface Cycle {
  id: number;
  name: string;
  photo: string;
  price: number,
  quantity?: number;
  
}

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
}

export const addToCart = (item: Cycle) => {
  console.log(item)

  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: item,
  }
  
};