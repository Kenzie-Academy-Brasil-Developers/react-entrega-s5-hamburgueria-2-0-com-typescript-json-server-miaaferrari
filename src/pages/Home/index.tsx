import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import api from '../../services/api';
import { ProductContainer, Box, CartContainer } from './style';
import { useCart } from '../../providers/Cart';
import { CartCard } from '../../components/CartCard';

interface Product {
    id: number;
    title: string;
    img: string;
    category: string;
    price: number
}

export const Home = () => {
    const [productsList, setProductsList] = useState<Product[]>([]);
    const {cart} = useCart(); 

    useEffect(() => {
        api
            .get<Product[]>('/products') 
            .then((res) => {
                setProductsList(res.data);
            })
            .catch((error) => console.log(error))
    })

    const totalPrice: number = cart.reduce((acc, value) => {
        return value.price + acc
    }, 0)

    return (
        <div>
            <Header />
            <Box>
                <ProductContainer>
                    {productsList.map((prod, index) => {
                        return <Card key={index} product={prod}/>
                    })}
                </ProductContainer>
                <CartContainer>
                    <h2>Carrinho</h2>
                    {cart.length === 0 ? (
                        <h4>Seu carrinho está vazio</h4>
                    ) : (
                        <h4>{totalPrice.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</h4>
                    )}
                    <div className='cartBox'>
                        {cart.map((prod, index) => {
                            return <CartCard key={index} product={prod} />
                        })}
                    </div>
                </CartContainer>
            </Box>
        </div>
    )
}