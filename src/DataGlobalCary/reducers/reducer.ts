import {ActionTypes, Cycle } from "./actions";

export interface State {
  cartListProduct: Cycle[];
}


export const initialState: State = {
  cartListProduct: [],
};



export const globalReducer = (state: State, action: any) => {
  
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
          
          return {
            ...data,
            quantity: data.quantity + 1,
            total: data.price * data.quantity
          };
        } else {
          return data;
        }
      });
      
      return {
        ...state,
        cartListProduct: newList,
      };
    case ActionTypes.CHANGE_QUANTITY:
      const newListTotalPrice = state.cartListProduct.map((data) => {
        if (data.id === action.payload) {
         
          return {
            ...data,
            total: data.price * data.quantity
          };
        } else {
          return data;
        }
      });
      
      return {
        ...state,
        cartListProduct: newListTotalPrice,
      };

    case ActionTypes.REMOVE_QUANTITY:
      const newListRemove = state.cartListProduct.map((data) => {
        if (data.id === action.payload && data.quantity > 1) {
         
          return {
            ...data,
            quantity: data.quantity - 1,
            total: data.price * data.quantity
          };
        } else {
          return data;
        }
      });
     
      return {
        ...state,
        cartListProduct: newListRemove,
      };

    default:
      return state;
  }
  
};