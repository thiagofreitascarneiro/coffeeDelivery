import styled from "styled-components";

export const ContainerDelivery = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
`

export const WrapperContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    margin-top: 120px;

    picture {
        display: flex;
        
    }
`

export const WrapperOrder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 41.6px;
        color: ${(props) => props.theme['yellow-dark']};
    }
    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: ${(props) => props.theme['base-subtitle']};
        font-stretch: 100; 
    }

`

interface SvgProps {
    backgroundColor: string;
  }
  

export const OrderInfo = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;
    width: 526px;
    height: 270px;
    background: linear-gradient(#fafafa, #fafafa) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
    border-radius: 6px 36px;
    border: 1px solid transparent;
   
   
 
`

export const InfoDiv = styled.div<SvgProps>`
     
    display: flex;
    gap: 12px;
    
    svg {
        padding: 8px;
        gap: 8px;
        width: 32px;
        height: 32px;
        background-color: ${props => props.backgroundColor};
        border-radius: 1000px;
    }
    
    p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20.8px;
    color: ${(props) => props.theme['base-text']};
        span {
            
            font-weight: 700;
        }
    }

    

`