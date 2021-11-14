import { createContext, ReactNode, useContext, useState } from "react";

interface CartProviderProps {
    children: ReactNode;
}

interface Product {
    id: number;
    title: string;
    img: string;
    category: string;
    price: number
}

interface CartProviderData {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [hamburguer, setHamburguer] = useState<Product[]>([]);
    const [xBurguer, setXburguer] = useState<Product[]>([]);
    const [bigKenzie, setBigKenzie] = useState<Product[]>([]);
    const [fanta, setFanta] = useState<Product[]>([]);
    const [coca, setcoca] = useState<Product[]>([]);
    const [mcshake, setMcshake] = useState<Product[]>([]);
    const [sunday, setSunday] = useState<Product[]>([]);
    const [comboKenzie, setComboKenzie] = useState<Product[]>([]);


    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };
    
    const removeFromCart = (productToBeDeleted: Product) => {
        const newList: Product[] = [];
        for( let i =0; i < cart.length; i++) {
            if (cart.indexOf(productToBeDeleted) !== cart.indexOf(cart[i])) {
                newList.push(cart[i]);
            }
        }
        setCart(newList);        
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext);