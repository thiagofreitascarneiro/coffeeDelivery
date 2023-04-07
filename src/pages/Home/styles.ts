import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;   
    flex-direction: column;

    h2 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 41.6px;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['base-subtitle']};
   
    }
    
`

export const CoffeeAdvertising = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;
    
`
export const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  filter: blur(108px);
  position: absolute;
  top: 0px;
`;


export const AdvertisingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    h1 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 62.4px;
        text-align: center;
        color: ${(props) => props.theme['base-title']};
    }

   
`

export const Subtitle = styled.p`

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${(props) => props.theme['base-subtitle']};;
    font-stretch: 100;
    margin-top: 16px;
    margin-left: 36px;

       

`

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 46px;
    width: 630px;
    
` 

export const FirstItem = styled.div`
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20.8px;
        color: ${(props) => props.theme['base-text']};
        position: relative;
        display: flex;
        align-items: center;
        span {
            padding: 0 0.75rem;
            
            img {
                
            }
                
        }
    }
    
`

export const SecondItem = styled.div`
    p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20.8px;
            display: flex;
            align-items: center;
            color: ${(props) => props.theme['base-text']};
            span {
            padding: 0 0.75rem;
                img {

                }
                    
            }

        span::before {
            content: "";
            display: inline-block;
            vertical-align: middle;
            background-image: url("../assets/Icon.png");
            background-size: cover;
        }
    }

`

export const CoffeeProduct = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;
    flex-direction: column;
    align-items: center;
    

    h2 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['base-title']};
        margin-bottom: 54px;
        

    }


`

export const CoffeeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 1146px;

`