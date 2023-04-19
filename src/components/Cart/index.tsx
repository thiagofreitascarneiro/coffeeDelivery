import { ButtonConfirm, ButtonRemove, CoffeePrice, CoffeeSlected , ContainerButton, ContainerCart, DecreaseButton, IncreaseButton, Line, Picture, PriceDelivery, QuantityButton, TotalCart, TotalItems, WrapperButton, WrapperDelivery } from "./styles";
import  americano  from '../../../public/americano.png'
import { Trash } from "phosphor-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/CyclesContexts";

export function Cart() {

    const { state, removeCoffeFromCart, handleQuantityCart } = useContext(AppContext);
    const coffeeListCart = state.cartListProduct;

    function removeCoffee(id: number) {
        removeCoffeFromCart(id);
    }

    return (
        <ContainerCart>
            {coffeeListCart.map((coffee) => (
                <><CoffeeSlected key={coffee.id}>
                    <Picture>
                        <img src={coffee.photo} />
                    </Picture>

                    <ContainerButton>
                        <p>{coffee.name}</p>
                        <WrapperButton>
                            <DecreaseButton onClick={() => handleQuantityCart(coffee.id, 'decrease')}>-</DecreaseButton>
                            <QuantityButton>1</QuantityButton>
                            <IncreaseButton onClick={() => handleQuantityCart(coffee.id, 'increase')}>+</IncreaseButton>

                            <ButtonRemove onClick={() => removeCoffee(coffee.id)}>
                                <Trash size={20} color="#8047F8" />
                                Remover
                            </ButtonRemove>
                        </WrapperButton>
                    </ContainerButton>
                    <CoffeePrice>
                        <p>R$ {coffee.price}</p>
                    </CoffeePrice>
                </CoffeeSlected><Line /></>
            ))}
           

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