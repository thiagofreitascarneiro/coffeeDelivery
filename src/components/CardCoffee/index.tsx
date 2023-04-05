import { ButtonCart, CartContainer, ControlCoffee, DecreaseButton, IncreaseButton, NameCoffee, Price, QuantityButton, SubtitleCoffee, TitleCoffee, TypeCoffee } from "./styles";
import coffee from "../../../public/americano.png"
import { ShoppingCart } from "phosphor-react";
import {coffees} from "../../data/coffees";
import { useState } from "react";
import { ICoffess } from "../../pages/Home";

interface ICoffeeList {
    content: ICoffess
}

export function CardCoffee({content}: ICoffeeList ) {

    return (
        
        <CartContainer>
            <picture>
                <img src={content.photo} alt="cart" />
            </picture>
            <TypeCoffee>
            {content.tags.map(tag => {
                 return (<p>{tag}</p>)
            })      
            }       
            </TypeCoffee>
            <NameCoffee>
               <TitleCoffee>{content.name}</TitleCoffee> 
               <SubtitleCoffee>{content.description}</SubtitleCoffee>
            </NameCoffee>
            <ControlCoffee>
                <Price>R$ <span>{content.price}</span></Price>
                <div>
                    <DecreaseButton>-</DecreaseButton>
                    <QuantityButton>1</QuantityButton>
                    <IncreaseButton>+</IncreaseButton>
                </div>
                <ButtonCart> 
                    <ShoppingCart 
                        size={24} 
                        color="#F3F2F2" 
                        weight="fill"/>
                </ButtonCart>
            </ControlCoffee>
            
        </CartContainer>
    )
}