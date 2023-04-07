import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  width: 448px;
  height: auto;
  left: 832px;
  top: 182px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const CoffeeSlected = styled.div`
  display: flex;
  justify-content: space-between;
  width: 368px;
  height: 80px;
  
`

export const CoffeePrice = styled.div`
  display: flex;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20.8px;
    display: flex;
    color: ${(props) => props.theme['base-text']};

  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.8px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};

  }
`

export const QuantityButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  color: ${(props) => props.theme['base-text']};
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


export const ButtonRemove = styled(QuantityButton)`
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  width: 110px;
  height: 40px;
  border-radius: 6px;
  justify-content: space-evenly;

`

export const WrapperButton = styled.div`
  display: flex;
  margin-top: 8px;
`

export const Picture = styled.picture`
  display: flex;
`

export const Line = styled.div`
  width: 358px;
  height: 0px;
  border: 1px solid #E6E5E5;

`

export const WrapperDelivery = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  height: 200px;
  gap: 15px;
`

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.2px;
  align-items: center;
  text-align: right;

  color: ${(props) => props.theme['base-text']};
`
export const PriceDelivery = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.2px;
  align-items: center;
  text-align: right;

  color: ${(props) => props.theme['base-text']};
`

export const TotalCart = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  align-items: center;
  text-align: right;

`
export const ButtonConfirm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  
  border: none;
  color: ${(props) => props.theme.white};
  width: 368px;
  height: 46px;
  background: ${(props) => props.theme['yellow']};
  border-radius: 6px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22.4px;
  margin-top: 24px;
`