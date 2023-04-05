import { ShoppingCart, MapPin } from 'phosphor-react';
import logo from '../../assets/logo.png';
import { Actions, Cart, HeaderContainer, Location } from './style';

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />

            <Actions>
                <Location>
                    <MapPin size={20} color="#8047F8" weight="fill" />  
                    <p>Porto Alegre, RS</p>
                </Location>  
                <Cart>
                    <ShoppingCart size={24} color="#C47F17" weight="fill"/>
                </Cart>
            </Actions>
        </HeaderContainer>
        

    )
}