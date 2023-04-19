import { ReactNode, createContext, useContext, useReducer, useState } from "react";
import { State, globalReducer, initialState } from "../reducers/reducer";
import { Cycle, addToCart, removeFromCart } from "../reducers/actions";

interface ContextProps {
    state: State;
    dispatch: React.Dispatch<any>;
    addCoffeeToCart: (item: Cycle) => void;
    removeCoffeFromCart: (id: number) => void;
    handleQuantityCart: (cartCoffeeId: number, type: 'increase' | 'decrease') => void;
  }

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as ContextProps);

export function AppProvider({ 
  children 
}:  CyclesContextProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const [cart, setCart] = useState<Cycle>();

  function addCoffeeToCart(item: Cycle) {
    const verifyProductExist = state.cartListProduct.find((coffee: Cycle) => {
      return coffee.id === item.id;
    })
    console.log(verifyProductExist)
    if(!verifyProductExist) {
      dispatch(addToCart(item));
    }
  }

  function handleQuantityCart(cartCoffeeId: number, 
    type: 'increase' | 'decrease') {
      const coffee = state.cartListProduct.find((coffee: Cycle) => {
        return coffee.id === cartCoffeeId;
      })
      console.log(coffee)
      const newCartCoffeeQuantity = type === 'increase' ? coffee.quantity + 1 : coffee.quantity - 1;
      dispatch(addToCart(newCartCoffeeQuantity));
      console.log(state.cartListProduct)
  }

  function removeCoffeFromCart(item: number) {
    dispatch(removeFromCart(item));
  }

  return (
    <AppContext.Provider value={{ 
      state, 
      dispatch, 
      addCoffeeToCart, 
      removeCoffeFromCart, 
      handleQuantityCart }}>
      {children}
    </AppContext.Provider>
  );

}



