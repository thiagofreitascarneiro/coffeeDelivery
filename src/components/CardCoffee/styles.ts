import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    height: 310px;
    left: 0px;
    top: 0px;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px;
    margin-top: 20px;
    margin-bottom: 30px;
    
    img {
        margin-top: -20px;
    }

`

export const TypeCoffee = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 13px;
        text-transform: uppercase;
        color: ${(props) => props.theme['yellow-dark']};
        padding: 4px 8px;
        width: 81px;
        height: 21px;
        background: ${(props) => props.theme['yellow-light']};
        border-radius: 100px;
        margin-top: 12px;
        text-align: center;
    }


`

export const NameCoffee = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const TitleCoffee = styled.p`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    margin-top: 16px;
    color: ${(props) => props.theme['base-subtitle']};
`

export const SubtitleCoffee = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18.2px;
    text-align: center;
    color: ${(props) => props.theme['base-label']};  
    width: 216px;
    margin-top: 8px;
`

export const ControlCoffee = styled.div`
    display: flex;
    margin-top: 33px;
    align-items: center;
    width: 208px;
    justify-content: space-between;
`

export const Price = styled.p`

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 22px;
        line-height: 14px;
        color: #574F4D;
        color: ${(props) => props.theme['base-text']};  
    }
`
export const QuantityButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  color: #333;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
`;

export const IncreaseButton = styled(QuantityButton)`
    color: ${(props) => props.theme['purple']};
    border-radius: 0px 6px 0px 0px;
    
`;

export const DecreaseButton = styled(QuantityButton)`
    color: ${(props) => props.theme['purple']};
    border-radius: 6px 0px 0px 0px;
    
`;

export const ButtonCart = styled.button`
    padding: 8px;
    width: 38px;
    height: 38px;
    background: #4B2995;
    border-radius: 6px;
    border: none;
    cursor: pointer;

`