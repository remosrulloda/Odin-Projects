import { useCart } from './CartContext';
import CartCard from './CartCard';

export default function Cart() {
    const { cartItems, clearCart, getCartTotal } = useCart();

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) :
                (
                    <>
                        {cartItems.map((item) => (
                            <CartCard key={item.id} product={item} />
                        ))}
                        <p>Total: ${getCartTotal().toFixed(2)}</p>
                        <button onClick={clearCart}>Clear Cart</button>
                    </>
                )
            }
            <button>Checkout</button>
        </div>
    );
};