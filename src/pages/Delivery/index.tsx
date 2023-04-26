import { Header } from "../../components/Header";
import { ContainerDelivery, InfoDiv, OrderInfo, WrapperContent, WrapperOrder } from "./styles";
import Iustration from '../../assets/Iustration.png'
import { MapPin, CurrencyDollar, Timer, Info } from "phosphor-react";
import { AppContext } from "../../contexts/CyclesContexts";
import { useContext, useEffect } from "react";


export function Delivery() {

    const { stateForm, statePayment } = useContext(AppContext);

    const formAddress = stateForm.listForm;
    const paymentMethd = statePayment.payment;

    return (
        <ContainerDelivery>
            <Header />
            <WrapperContent>
                <WrapperOrder>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>
                   { formAddress.map((adress) => (
                    <OrderInfo >
                        <InfoDiv backgroundColor="#8047F8">
                            <MapPin size={20} color="#ffffff" weight="fill" />
                            <p>
                                Entrega em <span>{adress.logradouro}, {adress.numero} </span><br/>
                                {adress.bairro}, {adress.uf}
                            </p>
                        </InfoDiv>
                        <InfoDiv backgroundColor="#DBAC2C">
                            <Timer size={20} color="#ffffff"  weight="fill" />
                            <p>
                                Previsão de entrega<br/>
                                <span> 20 min - 30 min </span>
                            </p>
                        </InfoDiv>
                        <InfoDiv backgroundColor="#C47F17">
                            <CurrencyDollar size={20} color="#ffffff" weight="fill" />
                            <p>
                                Pagamento na entrega<br/>
                                <span> {paymentMethd }</span>
                            </p>
                        </InfoDiv>       
                    </OrderInfo>
                ))}
                </WrapperOrder>
                <picture>
                    <img src={Iustration}/>
                </picture>
            </WrapperContent>
            
            
        </ContainerDelivery>
        
    )
}