import { FaShoppingCart, FaSignInAlt, FaSearch } from 'react-icons/fa';
import { Container, BoxInfos, CartContainer, Title, Button } from './style';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useCart } from '../../providers/Cart';

export const Header = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const history = useHistory();
    const {cart} = useCart(); 

    const handleClick = () => {
        setIsShow(true)
    }

    return (
        <Container>
            <Title>
                <h2>Burguer<span>Kenzie</span></h2>
            </Title>
            <BoxInfos>
                {isShow ? (
                   
                        <div className='search'>
                            <input placeholder='Pesquisar' />
                            <Button onClick={handleClick}><FaSearch color='white'/></Button>
                        </div>
                 
                ) : (
                    <Button onClick={handleClick}><FaSearch color='white'/></Button>

                )}
                <CartContainer>
                    <FaShoppingCart color='gray'/>
                    <span>{cart.length}</span>
                    <FaSignInAlt onClick={() => history.push('/login')} color='gray'/>
                </CartContainer>
            </BoxInfos>
        </Container>

    )
}
