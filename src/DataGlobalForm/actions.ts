export interface Form {
    bairro : string,
    cep : string,
    complemento?: string,
    ddd: string,
    ibge?: string,
    localidade: string,
    logradouro: string,
    siafi: string,
    uf: string,
    numero: string,
    
}

export enum ActionTypes {
    SET_FORM = 'SET_FORM'
}

export const setform = (form: Form) => {
    return {
      type: ActionTypes.SET_FORM,
      payload: form
    }
  }