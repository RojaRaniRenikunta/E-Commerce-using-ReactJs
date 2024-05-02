import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (newItem) => {
        const existingItem = cartItems.find(item => item.id === newItem.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemIdToRemove) => {
        setCartItems(cartItems.filter(item => item.id !== itemIdToRemove));
    };

    const updateQuantity = (itemId, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
