
export enum ActionTypes {
    SET_PAYMENT = 'SET_PAYMENT'
}

export const setPayment = (payment: string) => {
    return {
      type: ActionTypes.SET_PAYMENT,
      payload: payment
    }
  }