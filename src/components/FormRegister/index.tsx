import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { DeliveryAddress, Form, FormAdress, Input, InputDiv, Order, Payment, PaymentForm, PaymentMethod, ProductService, Subtitle, Title } from "./styles";

export function FormRegister() {
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
                    <PaymentMethod>
                        <CreditCard size={20} color="#8047F8" />
                        <p>cartão de crédito</p>
                    </PaymentMethod>
                    <PaymentMethod>
                        <Bank size={20} color="#8047F8" />
                        <p>cartão de débito</p>
                    </PaymentMethod>
                    <PaymentMethod>
                        <Money size={20} color="#8047F8" />
                        <p>Dinheiro</p>
                    </PaymentMethod>
                </PaymentForm>
            </Payment>
        </ProductService>
    )
}