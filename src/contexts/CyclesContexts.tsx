import { ReactNode, createContext, useContext } from "react";
import { State } from "../reducers/reducer";

interface ContextType {
    state: State;
    dispatch: React.Dispatch<any>;
  }

export const CyclesContext = createContext<ContextType>({
    state: { cartListProduct: [] },
    dispatch: () => null,
});

console.log(CyclesContext)