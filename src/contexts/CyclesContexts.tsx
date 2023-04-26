import { ReactNode, createContext, useContext, useReducer, useState } from "react";
import { State, globalReducer, initialState } from "../DataGlobalCary/reducers/reducer";
import { Cycle, addToCart, removeFromCart, totalPrice, updateAddQuantity, updateRemoveQuantity } from "../DataGlobalCary/reducers/actions";
import { StateForm, globalReducerForm, initialStateForm } from "../DataGlobalForm/reducer";
import { Form, setform } from "../DataGlobalForm/actions";
import { StatePayment, globalReducerPayment, initialStatePayment } from "../DataGlobalPayment/reducer";
import { setPayment } from "../DataGlobalPayment/actions";

interface ContextProps {
    state: State;
    stateForm: StateForm;
    statePayment: StatePayment;
    dispatch: React.Dispatch<any>;
    addCoffeeToCart: (item: Cycle) => void;
    removeCoffeFromCart: (id: number) => void;
    handleAddQuantityCoffee: (id: number) => void;
    handleRemoveQuantityCoffee: (id: number) => void;
    handleChangeTotalPrice: (id: number) => void;
    setFormUser: (state: Form) => void;
    setPaymentMethod: (paymnt: string) => void;
  }

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext({} as ContextProps);

export function AppProvider({ 
  children 
}:  CyclesContextProviderProps) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const [stateForm, dispatchForm] = useReducer(globalReducerForm, initialStateForm);

  const [statePayment, dispatchPayment] = useReducer(globalReducerPayment, initialStatePayment);

  function addCoffeeToCart(item: Cycle) {
    const verifyProductExist = state.cartListProduct.find((coffee: Cycle) => {
      return coffee.id === item.id;
    })
  
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

  function handleChangeTotalPrice(id: number) {
    dispatch(totalPrice(id));
  }

  function setFormUser(state: Form) {
    dispatchForm(setform(state))
  }

  function setPaymentMethod(payment: string) {
    
    dispatchPayment(setPayment(payment))
  }

  return (
    <AppContext.Provider value={{ 
      state, 
      stateForm,
      statePayment,
      dispatch, 
      addCoffeeToCart, 
      removeCoffeFromCart, 
      handleAddQuantityCoffee,
      handleRemoveQuantityCoffee,
      handleChangeTotalPrice,
      setFormUser,
      setPaymentMethod,
      
       }}>
      {children}
    </AppContext.Provider>
  );

}



