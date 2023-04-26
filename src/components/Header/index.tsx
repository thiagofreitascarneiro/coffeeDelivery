import { ShoppingCart, MapPin } from 'phosphor-react';
import logo from '../../assets/logo.png';
import { Actions, Cart, HeaderContainer, Location, QuantityCart } from './style';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../contexts/CyclesContexts';

export function Header() {

    const { state } = useContext(AppContext);
    const coffeeListLenght = state.cartListProduct.length;
    const { stateForm } = useContext(AppContext);

    const formAddressLocal = stateForm.listForm

    return (
        <HeaderContainer>
            <Link to={'/'}>
                <img src={logo} alt="" />
            </Link>
            
            <Actions>
                <Location>
                    <MapPin size={20} color="#8047F8" weight="fill" /> 
                    { formAddressLocal.length > 0 ?
                        formAddressLocal.map(local => (
                            <p>{local?.localidade}, {local?.uf}</p>
                        )) 
                        : <p>Seja bem vindo!</p>
                    } 
                   
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