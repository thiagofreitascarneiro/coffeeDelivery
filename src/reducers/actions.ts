export const ADD_TO_LIST = "ADD_TO_LIST";


export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
}

export const addToMyCart = (item: any) => {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
        item,
    }
  }
};