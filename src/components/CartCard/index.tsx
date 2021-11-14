import { Container } from './style';
import { useCart } from '../../providers/Cart/index'

interface Product {
    id: number;
    title: string;
    img: string;
    category: string;
    price: number
}

interface CartProps {
    product: Product;
}

export const CartCard = ({product}: CartProps) => {
    const {removeFromCart} = useCart();
    const {title, category, price } = product;

    return (
        <Container>
            <h3>{title}</h3>
            <span>{category}</span>
            <p>{price.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</p>
                <button onClick={() => removeFromCart(product)}>Remover</button>
        </Container>
    )
}
