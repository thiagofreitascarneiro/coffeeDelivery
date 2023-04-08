import { ReactNode, createContext, useContext } from "react";

export interface CyclesContextType {
    id: number;
    name: string;
    photo: string;
    price: number,
    quantity?: number;
}

export const CyclesContext = createContext({} as CyclesContextType);

