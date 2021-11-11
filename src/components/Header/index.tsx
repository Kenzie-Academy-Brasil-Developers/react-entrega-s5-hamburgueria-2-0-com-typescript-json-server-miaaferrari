import { FaShoppingCart, FaSignInAlt, FaSearch } from 'react-icons/fa';
import { Container, SearchContainer  } from './style';

export const Header = () => {

    return (
        <Container>
            <div>
                <h2>Burguer<span>Kenzie</span></h2>
            </div>
            <SearchContainer>
                <div>
                    <input></input>
                    <button><FaSearch /></button>
                </div>
                <div>
                    <FaShoppingCart />
                    <span>0</span>
                </div>
                <FaSignInAlt />
            </SearchContainer>
        </Container>

    )
}
