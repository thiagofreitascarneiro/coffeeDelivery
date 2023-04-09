import { ReactNode, createContext, useContext, useReducer } from "react";
import { State, globalReducer } from "../reducers/reducer";

interface ContextProps {
    state: State;
    dispatch: React.Dispatch<any>;
  }

const initialState: State = {
  cartListProduct: [],
};

type Props = {
  children?: React.ReactNode;
};

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});


export function AppProvider({ 
  children 
}:  CyclesContextProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );

}



