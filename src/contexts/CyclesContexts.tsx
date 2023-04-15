import { ReactNode, createContext, useContext, useReducer, useState } from "react";
import { State, globalReducer, initialState } from "../reducers/reducer";
import { addToCart } from "../reducers/actions";

interface ContextProps {
    state: State;
    dispatch: React.Dispatch<any>;
    cartItems: any;
    handleCart: (iitem: any) => void;
  }

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as ContextProps);

export function AppProvider({ 
  children 
}:  CyclesContextProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const [cartItems, setCartItems] = useState([]);

  function handleCart(item: any) {
    dispatch(addToCart(item));
  }

  return (
    <AppContext.Provider value={{ state, dispatch, cartItems, handleCart }}>
      {children}
    </AppContext.Provider>
  );

}



