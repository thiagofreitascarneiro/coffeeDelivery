import { ButtonCart, CartContainer, ControlCoffee, DecreaseButton, IncreaseButton, NameCoffee, Price, QuantityButton, SubtitleCoffee, TitleCoffee, TypeCoffee } from "./styles";

import { ShoppingCart } from "phosphor-react";
 
import { useEffect, useState } from "react";
import { ICoffess } from "../../pages/Home";

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

    const [coffeeSelected, setCoffeeSelected] = useState<ICoffeeSelected>({
        id: 0,
        name: '',
        photo: '',
        price: 0,
        quantity: 0,
    });

    function selectedCoffeeToCart() {

        setCoffeeSelected({
            ...coffeeSelected,
            quantity: 1,
            id: content.id,
            name: content.name,
            photo: content.photo,
            price: content.price,
        })  
        
        
    }
    

    useEffect(() => {
        console.log(coffeeSelected)
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