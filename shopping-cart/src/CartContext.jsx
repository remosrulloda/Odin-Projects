import { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (item) => {
        setCartItems((prevCart) => {
            const isItemInCart = prevCart.find(cartItem => cartItem.id === item.id);

            if (isItemInCart) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (item) => {
        setCartItems((prevCart) => {
            const isItemInCart = prevCart.find(cartItem => cartItem.id === item.id);

            if (!isItemInCart) return prevCart;

            if (isItemInCart.quantity === 1) {
                return prevCart.filter(cartItem => cartItem.id != item.id);
            } else {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            }
        });
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





