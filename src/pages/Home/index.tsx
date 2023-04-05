import { Header } from "../../components/Header";
import { AdvertisingContainer, CoffeeAdvertising, CoffeeContainer, CoffeeProduct, FirstItem, HomeContainer, Items, SecondItem, StyledImage, Subtitle } from "./styles";
import coffee from '../../assets/coffee.png';
import Icon from '../../assets/icon.png';
import Icon1 from '../../assets/icon-1.png';
import Icon2 from '../../assets/icon-2.png';
import Icon3 from '../../assets/icon-3.png';
import Vector from '../../assets/vector.png';
import Vector2 from '../../assets/vector2.png';
import { CardCoffee } from "../../components/CardCoffee";
import {coffees} from "../../data/coffees";

export interface ICoffess {
    id: number;
    tags: string[];
    name: string;
    description: string;
    price: number;
    photo: string;
}

export function Home() {

    return (
        <HomeContainer>
            <Header />
            <CoffeeAdvertising>
                <AdvertisingContainer>
                    <h1>Encontre o café perfeito <br/> para qualquer hora do dia</h1>
                    <StyledImage src={Vector} alt=""/>
                    <Subtitle>
                    <StyledImage src={Vector2} alt=""/>
                        Com o Coffee Delivery você recebe seu café onde estiver, a <br />
                        qualquer hora
                    </Subtitle>
                    <Items>
                    <StyledImage src={Vector2} alt=""/>
                        <FirstItem>
                            <p>
                            <span >
                                <img src={Icon} alt=""/>
                            </span>
                                Compra simples e segura
                            </p>
                            
                            <p>
                                <span >
                                    <img src={Icon2} alt=""/>
                                </span>
                                Embalagem mantém o café intacto
                            </p>
                            
                        </FirstItem>
                        <SecondItem>
                        <StyledImage src={Vector} alt=""/>
                        <StyledImage src={Vector2} alt=""/>
                            <p>
                            <span >
                                <img src={Icon1} alt=""/>
                            </span>
                                Entrega rápida e rastreada
                            </p>
                            
                            <p>
                                <span >
                                    <img src={Icon3} alt=""/>
                                </span>
                                O café chega fresquinho até você
                            </p>
                            
                        </SecondItem>
                        
                    </Items>
                </AdvertisingContainer>
               
                <picture>
                    <source srcSet={coffee} type="imagem café" />
                    <StyledImage src={Vector2} alt=""/>
                    <StyledImage src={Vector} alt=""/>
                    <StyledImage src={Vector2} alt=""/>
                    <img src={coffee} alt="Café" title="imagem propaganda café"/>
                </picture>
                
            </CoffeeAdvertising>
            
            <CoffeeProduct>
               <h2>Nossos cafés</h2> 
               <CoffeeContainer>
                    {
                        coffees.map((coffee) => {
                            return (
                                <CardCoffee 
                                    key={coffee.id}
                                    content={coffee}
                                />
                            )
                        })
                    }
              </CoffeeContainer>
            </CoffeeProduct>
            
        </HomeContainer>
    )
}