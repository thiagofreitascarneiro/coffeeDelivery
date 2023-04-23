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
import { useEffect, useState } from "react";

interface Endereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }


export function FormRegister() {

    const [payment1Clicked, setPayment1Clicked] = useState(false);
    const [payment2Clicked, setPayment2Clicked] = useState(false);
    const [payment3Clicked, setPayment3Clicked] = useState(false);
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState<Endereco | null>(null);

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
    useEffect(() => {
        if (cep.length === 8) {
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
              setEndereco(data);
              console.log(data);
            })
            .catch(error => {
              console.error(error);
            });
        }
      }, [cep]);
      
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
                            <Input type="text" name="zipCode" value={cep} 
                                onChange={e => setCep(e.target.value)} fullWidth placeholder="CEP"/>
                            <>
                            <label htmlFor="street"></label><Input type="text" 
                            name="street" width='560px'value={endereco?.logradouro} fullWidth placeholder="Rua" />
                            <div>
                                    <InputDiv>
                                        <label htmlFor="number"></label>
                                        <Input type="text" name="city" placeholder="Número" />

                                        <label htmlFor="complement address"></label>
                                        <Input type="text" width="348px" name="complemento" placeholder="Complemento" />
                                    </InputDiv>
                                    <InputDiv>
                                        <label htmlFor="city"></label>
                                        <Input type="text" name="city" value={endereco?.localidade} placeholder="Cidade" />

                                        <label htmlFor="neighborhood"></label>
                                        <Input type="text" width="276px" value={endereco?.bairro}  name="neighborhood" placeholder="Bairro" />

                                        <label htmlFor="state"></label>
                                        <Input type="text" width="60px"  value={endereco?.uf}  name="state" placeholder="UF" />
                                    </InputDiv>
                                    
                            </div></>
                            
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