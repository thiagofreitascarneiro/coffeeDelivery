import { Header } from "../../components/Header";
import { ContainerDelivery, OrderInfo, WrapperContent, WrapperOrder } from "./styles";
import Iustration from '../../assets/Iustration.png'

export function Delivery() {
    return (
        <ContainerDelivery>
            <Header />
            <WrapperContent>
                <WrapperOrder>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>

                    <OrderInfo>
                        <p>
                            Entrega em <span>Rua João Daniel Martinelli, 102 </span><br/>
                            Farrapos - Porto Alegre, RS
                        </p>
                        <p>
                            Previsão de entrega<br/>
                            <span> 20 min - 30 min </span>
                        </p>
                        <p>
                            Pagamento na entrega<br/>
                            <span> Cartão de Crédito</span>
                        </p>

                    </OrderInfo>
                </WrapperOrder>
                <picture>
                    <img src={Iustration}/>
                </picture>
            </WrapperContent>
            
            
        </ContainerDelivery>
        
    )
}