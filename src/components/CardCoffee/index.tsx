import { ButtonCart, CartContainer, ControlCoffee, DecreaseButton, IncreaseButton, NameCoffee, Price, QuantityButton, SubtitleCoffee, TitleCoffee, TypeCoffee } from "./styles";

import { ShoppingCart } from "phosphor-react";
 
import { useEffect, useReducer, useState } from "react";
import { ICoffess } from "../../pages/Home";
import { globalReducer, initialState } from "../../reducers/reducer";
import { addToCart } from "../../reducers/actions";

interface ICoffeeList {
    content: ICoffess,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ICoffeeSelected {
    id: number,
    name: string,
    photo: string,
    price: number;
    quantity: number;
}

export function CardCoffee({content}: ICoffeeList ) {

    const [state, dispatch] = useReducer(globalReducer, initialState);


    function selectedCoffeeToCart() {
        const newItem = { 
            id: content.id, 
            name: content.name,
            photo: content.photo,
            price: content.price,
            quantity: 1 
        };
        dispatch(addToCart(newItem));
    }
    

    useEffect(() => {
        
    }, [selectedCoffeeToCart])

    return (
        
        <CartContainer>
            <picture>
                <img src={content.photo} alt="cart" />
            </picture>
            <TypeCoffee>
            {content.tags.map(tag => {
                 return (<p  key={tag}>{tag}</p>)
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
                <ButtonCart
                    onClick={selectedCoffeeToCart}
                > 
                    <ShoppingCart 
                        size={24} 
                        color="#F3F2F2" 
                        weight="fill"/>
                </ButtonCart>
            </ControlCoffee>
            
        </CartContainer>
    )
}