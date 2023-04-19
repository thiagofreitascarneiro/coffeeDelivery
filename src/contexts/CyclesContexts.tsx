import { ReactNode, createContext, useContext, useReducer, useState } from "react";
import { State, globalReducer, initialState } from "../reducers/reducer";
import { Cycle, addToCart, removeFromCart, updateAddQuantity, updateRemoveQuantity } from "../reducers/actions";

interface ContextProps {
    state: State;
    dispatch: React.Dispatch<any>;
    addCoffeeToCart: (item: Cycle) => void;
    removeCoffeFromCart: (id: number) => void;
    handleAddQuantityCoffee: (id: number) => void;
    handleRemoveQuantityCoffee: (id: number) => void;
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

  function handleAddQuantityCoffee(id: number) {
    dispatch(updateAddQuantity(id));
  }

  function handleRemoveQuantityCoffee(id: number) {
    dispatch(updateRemoveQuantity(id));
  }

  return (
    <AppContext.Provider value={{ 
      state, 
      dispatch, 
      addCoffeeToCart, 
      removeCoffeFromCart, 
      handleAddQuantityCoffee,
      handleRemoveQuantityCoffee
       }}>
      {children}
    </AppContext.Provider>
  );

}



