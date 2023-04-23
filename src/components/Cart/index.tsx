import { ButtonConfirm, ButtonRemove, CoffeePrice, CoffeeSlected , ContainerButton, ContainerCart, DecreaseButton, IncreaseButton, Line, Picture, PriceDelivery, QuantityButton, TotalCart, TotalItems, WrapperButton, WrapperDelivery } from "./styles";
import { Trash } from "phosphor-react";
import { useContext } from "react";
import { AppContext } from "../../contexts/CyclesContexts";
import { formatCurrency } from "../../helpers";

export function Cart() {

    const { state, 
        removeCoffeFromCart, 
        handleAddQuantityCoffee, 
        handleRemoveQuantityCoffee,
        handleChangeTotalPrice } = useContext(AppContext);
    const coffeeListCart = state.cartListProduct;

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
                            <DecreaseButton onClick={() => {
                                handleRemoveQuantityCoffee(coffee.id); 
                                handleChangeTotalPrice(coffee.id)}}>
                                    -
                            </DecreaseButton>
                            <QuantityButton>1</QuantityButton>
                            <IncreaseButton onClick={() => {
                                handleAddQuantityCoffee(coffee.id); 
                                handleChangeTotalPrice(coffee.id)}}>
                                    +
                            </IncreaseButton>

                            <ButtonRemove onClick={() => removeCoffeFromCart(coffee.id) }>
                                <Trash size={20} color="#8047F8" />
                                Remover
                            </ButtonRemove>
                        </WrapperButton>
                    </ContainerButton>
                    <CoffeePrice>
                        <p> {formatCurrency.format(coffee.total)}</p>
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