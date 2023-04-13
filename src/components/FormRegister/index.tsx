import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { DeliveryAddress, 
            Form, 
            FormAdress, 
            Input, 
            InputDiv, 
            Order, 
            Payment, 
            PaymentForm, 
            PaymentMethod, 
            ProductService, 
            Subtitle, 
            Title } from "./styles";
import { useState } from "react";



export function FormRegister() {

    const [payment1Clicked, setPayment1Clicked] = useState(false);
    const [payment2Clicked, setPayment2Clicked] = useState(false);
    const [payment3Clicked, setPayment3Clicked] = useState(false);

    function handleClickPayment1() {
        setPayment1Clicked(true);
        setPayment2Clicked(false);
        setPayment3Clicked(false);
    }
    function handleClickPayment2() {
        setPayment1Clicked(false);
        setPayment2Clicked(true);
        setPayment3Clicked(false);
    }
    function handleClickPayment3() {
        setPayment1Clicked(false);
        setPayment2Clicked(false);
        setPayment3Clicked(true);
    }
    
    return (
        <ProductService>    
            <Order>
                <DeliveryAddress>
                    <FormAdress>
                        <div>   
                            
                            <Title>
                            <MapPinLine size={20} color="#C47F17" />  Endereço de Entrega
                            </Title>
                            <Subtitle>
                                Informe o endereço onde deseja receber seu pedido
                            </Subtitle>
                        </div> 
                        <Form >
                            <label htmlFor="zipCode"></label>
                            <Input type="text" name="zipCode" fullWidth placeholder="CEP"/>

                            <label htmlFor="street"></label>
                            <Input type="text" name="street" width='560px' fullWidth placeholder="Rua"/>
                            <div>
                                <InputDiv>
                                    <label htmlFor="number"></label>
                                    <Input type="text" name="city" placeholder="Número"/>

                                    <label htmlFor="complement address"></label>
                                    <Input type="text" width="348px" name="complement" placeholder="Complemento"/>
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="city"></label>
                                    <Input type="text" name="city" placeholder="Cidade"/>

                                    <label htmlFor="neighborhood"></label>
                                    <Input type="text" width="276px" name="neighborhood" placeholder="Bairro"/>

                                    <label htmlFor="state"></label>
                                    <Input type="text" width="60px" name="state" placeholder="UF"/>
                                </InputDiv>
                            </div>

                            {/* <button type="submit">Submit</button> */}
                        </Form>
                    </FormAdress>
                </DeliveryAddress>
            </Order>
            <Payment>
                <Title> <CurrencyDollar size={20} color="#8047F8" />Pagamento</Title>
                <Subtitle>
                    O pagamento é feito na entrega. Escolha 
                    a forma que deseja pagar
                </Subtitle>
                <PaymentForm>
                    <PaymentMethod onClick={handleClickPayment1} isClicked={payment1Clicked}>
                        <CreditCard size={20} color="#8047F8" />
                        <p>cartão de crédito</p>
                    </PaymentMethod>
                    <PaymentMethod onClick={handleClickPayment2} isClicked={payment2Clicked}>
                        <Bank size={20} color="#8047F8" />
                        <p>cartão de débito</p>
                    </PaymentMethod>
                    <PaymentMethod onClick={handleClickPayment3} isClicked={payment3Clicked}>
                        <Money size={20} color="#8047F8" />
                        <p>Dinheiro</p>
                    </PaymentMethod>
                </PaymentForm>
            </Payment>
        </ProductService>
    )
}