import { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const isItemInCart = prevItems.find((item) => item.id === product.id);

            if (isItemInCart) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevItems, product];
            }
        });
    };

    const removeFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter(cartItem => cartItem.id !== item.id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const updateQuantity = (itemId, quantity) => {
        setCartItems((prevCart) => prevCart.map(cartItem =>
            cartItem.id === itemId ? { ...cartItem, quantity: quantity } : cartItem
        ));
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }, 500);
        return () => clearTimeout(timeout);
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};





