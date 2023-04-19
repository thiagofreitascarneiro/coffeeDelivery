import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 160px;
    height: 104px;
    background: ${(props) => props.theme.background};

`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 12px;

`

export const Location = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 143px;
    height: 38px;

    background: ${(props) => props.theme['purple-light']};
    border-radius: 6px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: ${(props) => props.theme['purple-dark']};
    }
`

export const Cart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    width: 38px;
    height: 38px;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
    cursor: pointer;
    position: relative;
`

export const QuantityCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 1000px;
    position: absolute;
    top: -8px;
    right: -7px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15.6px;
        text-align: center;
        letter-spacing: -0.06em;
        color: ${(props) => props.theme.white};
    }
`