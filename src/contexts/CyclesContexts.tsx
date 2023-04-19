import { ReactNode, createContext, useContext, useReducer, useState } from "react";
import { State, globalReducer, initialState } from "../reducers/reducer";
import { Cycle, addToCart, removeFromCart, updateQuantity } from "../reducers/actions";

interface ContextProps {
    state: State;
    dispatch: React.Dispatch<any>;
    addCoffeeToCart: (item: Cycle) => void;
    removeCoffeFromCart: (id: number) => void;
    handleQuantityCoffee: (id: number) => void;
  }

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as ContextProps);

export function AppProvider({ 
  children 
}:  CyclesContextProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  function addCoffeeToCart(item: Cycle) {
    const verifyProductExist = state.cartListProduct.find((coffee: Cycle) => {
      return coffee.id === item.id;
    })
    console.log(verifyProductExist)
    if(!verifyProductExist) {
      dispatch(addToCart(item));
    }
  }

  function removeCoffeFromCart(item: number) {
    dispatch(removeFromCart(item));
  }

  function handleQuantityCoffee(id: number) {
    dispatch(updateQuantity(id));
  }

  return (
    <AppContext.Provider value={{ 
      state, 
      dispatch, 
      addCoffeeToCart, 
      removeCoffeFromCart, 
      handleQuantityCoffee
       }}>
      {children}
    </AppContext.Provider>
  );

}



