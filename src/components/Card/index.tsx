import { Container } from './style';
import { useCart } from '../../providers/Cart/index'

interface Product {
    id: number;
    title: string;
    img: string;
    category: string;
    price: number
}

interface CardProps {
    product: Product;
}

export const Card = ({product}: CardProps) => {
    const {addToCart} = useCart();
    const {title, img, category, price } = product;

    return (
        <Container>
            <img src={img} alt={title}></img>
            <h2>{title}</h2>
            <span>{category}</span>
            <p>{price.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</p>         
                <button onClick={() => addToCart(product)}>Adicionar</button>
        </Container>
    )
}