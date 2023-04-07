import styled from "styled-components";

export const CheckoutContainer = styled.div`
     display: flex;   
     flex-direction: column;
    
` 

export const ServicersContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

export const Title = styled.h2`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23.4px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 15px;

`

export const ProductSelected = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 32px;

`