import { createContext, useContext, useState } from 'react';
import Context from './Context';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
    const { product } = useContext(Context);

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < product.length; i++) {
            cart[i] = 0;
        }
        return cart;
    };

    const [cartProduct, setCartProduct] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartProduct((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartProduct);
    };

    return <CartContext.Provider value={{ cartProduct, setCartProduct, addToCart }}>{children}</CartContext.Provider>;
}
