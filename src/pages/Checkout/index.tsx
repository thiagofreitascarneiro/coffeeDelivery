
import { Header } from "../../components/Header";
import { CheckoutContainer, ProductSelected, ServicersContainer, Title } from "./styles";
import { Cart } from "../../components/Cart";
import { FormRegister } from "../../components/FormRegister";

export function Checkout() {
    return (
       <CheckoutContainer>
            <Header />
            <ServicersContainer>
                
                <ProductSelected>
                    <Title>Complete seu pedido</Title>
                        <FormRegister />
                </ProductSelected>

                <ProductSelected>
                    <Title>Cafés selecionados</Title>
                        <Cart />
                </ProductSelected>

            </ServicersContainer>
       </CheckoutContainer> 
    )
}