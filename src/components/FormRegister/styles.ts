import styled from "styled-components";


export const ProductService = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`

export const Order =styled.div`
    display: flex;
`

export const DeliveryAddress = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    width: 640px;
    height: 372px;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;
`
export const Title = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: ${(props) => props.theme['base-subtitle']};
    margin-left: 10px;

`

export const Subtitle = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: ${(props) => props.theme['base-text']};
    margin-top: 8px;
    margin-left: 35px;
`

export const FormAdress = styled.div`
    display: flex;
    flex-direction: column;
    
`


export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    width: 640px;
    height: 207px;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    margin-top: 12px;

`

type InputProps = {
    fullWidth?: boolean;
    width?: string;
  };



export const Form = styled.form`
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`

export const Input = styled.input<InputProps>`

    width: ${({ width }) => width ? width : '200px'};
    height: 42px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    margin-right: 12px;
    padding: 15px;
    ${({ fullWidth }) => fullWidth && 'grid-column: 1 / -1;'};
    
    ::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18.2px;
        padding: 20px;
        color: ${(props) => props.theme['base-label']};
    }

`
export const InputDiv = styled.div`
    display: flex;
    margin-top: 8px;
    margin-bottom: 16px;
    
`

export const PaymentForm = styled.div`
    display: flex;   
    margin-top: 32px;
`
interface PaymentProps {
    isClicked: boolean;
}

export const PaymentMethod = styled.div<PaymentProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    width: 178.67px;
    height: 51px;
    border-radius: 6px;
    justify-content: space-evenly;
    margin-right: 12px;
    cursor: pointer;
    background-color: ${props => (props.isClicked ? '#EBE5F9' : '#E6E5E5')};
    border: ${(props) => props.isClicked ? '1px solid #8047F8' : 'none'};

    P {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 19.2px;
        text-transform: uppercase;
        color: ${(props) => props.theme['base-text']};

    }

    /* &:active {
        background: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme['purple']};
    } */
`

