import { ReactNode, createContext, useContext, useReducer } from "react";
import { State, globalReducer, initialState } from "../reducers/reducer";

interface ContextProps {
    state: State;
    dispatch: React.Dispatch<any>;
  }

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => [],
});

export function AppProvider({ children}: CyclesContextProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  

  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );

}



