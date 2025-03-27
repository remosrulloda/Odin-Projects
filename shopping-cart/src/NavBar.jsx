import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function NavBar() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart ({totalItems})</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
