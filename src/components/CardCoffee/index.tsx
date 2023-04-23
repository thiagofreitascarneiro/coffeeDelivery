import { ButtonCart, CartContainer, ControlCoffee, DecreaseButton, IncreaseButton, NameCoffee, Price, QuantityButton, SubtitleCoffee, TitleCoffee, TypeCoffee } from "./styles";

import { ShoppingCart } from "phosphor-react";
 
import { useContext } from "react";
import { ICoffess } from "../../pages/Home";
import { AppContext } from "../../contexts/CyclesContexts";
import { formatCurrency } from "../../helpers";

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
    total: number;
}

export function CardCoffee({content}: ICoffeeList ) {

    const { addCoffeeToCart, 
        handleAddQuantityCoffee, 
        handleRemoveQuantityCoffee,
        handleChangeTotalPrice } = useContext(AppContext)

    function selectedCoffeeToCart() {
        const newItem = { 
            id: content.id, 
            name: content.name,
            photo: content.photo,
            price: content.price,
            quantity: 1,
            total: content.price
        };
        
        addCoffeeToCart(newItem);
    }

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
                <Price> <span>{formatCurrency.format(content.price)}</span></Price>
                <div>
                    <DecreaseButton onClick={() => {
                        handleRemoveQuantityCoffee(content.id); 
                        handleChangeTotalPrice(content.id)}}>-</DecreaseButton>
                    <QuantityButton>1</QuantityButton>
                    <IncreaseButton 
                        onClick={() => {
                        handleAddQuantityCoffee(content.id); 
                        handleChangeTotalPrice(content.id)}} >
                            +
                    </IncreaseButton>
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