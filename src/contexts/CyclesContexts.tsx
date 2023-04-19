import { ReactNode, createContext, useContext, useReducer } from "react";
import { State, globalReducer, initialState } from "../reducers/reducer";
import { addToCart } from "../reducers/actions";

interface ContextProps {
    state: State;
    dispatch: React.Dispatch<any>;
  }

interface CyclesContextProviderProps {
  children: ReactNode;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface AppContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
  handleAddToCart: (value: any) => void;
}

export const AppContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

export function AppProvider({ children}: CyclesContextProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  function handleAddToCart(value: any) {
    dispatch(addToCart(value));
  }  
  return (
    <AppContext.Provider value={{ state, dispatch, handleAddToCart }}>
      {children}
    </AppContext.Provider>
  );

}



