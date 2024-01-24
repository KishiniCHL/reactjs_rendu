import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]); // on initialise le state avec un tableau vide

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeProductCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
      };

      const clearCart = () => {
        setCart([]);
      };

    return (
    <CartContext.Provider value={{ cart, addToCart, removeProductCart, clearCart }}>
        {children}
    </CartContext.Provider>)
}

export function useCart() {
    return useContext(CartContext)
}