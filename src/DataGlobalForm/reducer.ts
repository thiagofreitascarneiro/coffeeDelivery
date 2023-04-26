import { ActionTypes, Form } from "./actions";

export interface StateForm {
    listForm: Form[];
  }
  

export const initialStateForm: StateForm = {
    listForm: [],
};
  

export const globalReducerForm = (state: StateForm, action: any) => {
   
    switch (action.type) {
      case ActionTypes.SET_FORM:
        return {       
          ...state,
          listForm: [ action.payload],
        };
      default:
        return state;
    }
    
  };