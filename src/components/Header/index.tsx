import { ShoppingCart, MapPin } from 'phosphor-react';
import logo from '../../assets/logo.png';
import { Actions, Cart, HeaderContainer, Location, QuantityCart } from './style';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../contexts/CyclesContexts';

export function Header() {

    const { state } = useContext(AppContext);
    const coffeeListLenght = state.cartListProduct.length;

    return (
        <HeaderContainer>
            <Link to={'/'}>
                <img src={logo} alt="" />
            </Link>
            
            <Actions>
                <Location>
                    <MapPin size={20} color="#8047F8" weight="fill" />  
                    <p>Porto Alegre, RS</p>
                </Location>  
                <Cart>
                    <QuantityCart>
                        <p>{coffeeListLenght}</p>
                    </QuantityCart>
                    <Link to={'/checkout'}>
                        <ShoppingCart size={24} color="#C47F17" weight="fill"/>
                    </Link> 
                </Cart>
            </Actions>
           
        </HeaderContainer>
        

    )
}