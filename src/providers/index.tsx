import { ReactNode } from "react";
import { CartProvider } from './Cart';
import { AuthProvider } from './Auth';

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {

    return (
        <CartProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </CartProvider>
    )
}
