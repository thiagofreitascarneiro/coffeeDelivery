import { ButtonConfirm, ButtonRemove, CoffeePrice, CoffeeSlected , ContainerButton, ContainerCart, DecreaseButton, IncreaseButton, Line, Picture, PriceDelivery, QuantityButton, TotalCart, TotalItems, WrapperButton, WrapperDelivery } from "./styles";
import  americano  from '../../../public/americano.png'
import { Trash } from "phosphor-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/CyclesContexts";

export function Cart() {

    return (
        <ContainerCart>
            <CoffeeSlected>
                <Picture>
                    <img src={americano} />          
                </Picture>
                
                <ContainerButton>
                    <p>Expresso Tradicional</p>
                    <WrapperButton>
                        <DecreaseButton>-</DecreaseButton>
                        <QuantityButton>1</QuantityButton>
                        <IncreaseButton>+</IncreaseButton>

                        <ButtonRemove>
                            <Trash size={20} color="#8047F8"/>
                            Remover
                        </ButtonRemove>
                    </WrapperButton>
                </ContainerButton>
                <CoffeePrice>
                    <p>R$ 9,90</p>
                </CoffeePrice>
            </CoffeeSlected>

            <Line />

            <WrapperDelivery>
                <TotalItems>
                    <p>total de itens</p>
                    <p>R$ 29,70</p>
                </TotalItems>
                <PriceDelivery>
                    <p>entrega</p>
                    <p>R$ 3,50</p>
                </PriceDelivery>
                <TotalCart>
                    <p>Total</p>
                    <p>R$ 33,20</p>
                </TotalCart>
                <ButtonConfirm>
                    Confirmar Pedido
                </ButtonConfirm>
            </WrapperDelivery>
            
        </ContainerCart>
    )
}