import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className='fixed top-0 w-full bg-white shadow-md z-50 h-20 pt-4'>
            <ul className='flex justify-center gap-15 items-center'>
                <li className='flex flex-col items-center'>
                    <Link to="/" className='flex flex-col items-center'>
                        <FontAwesomeIcon icon={faHouse} className="mb-2" />
                        Home
                    </Link>
                </li>
                <li className='flex flex-col items-center'>
                    <Link to="/shop" className='flex flex-col items-center'>
                        <FontAwesomeIcon icon={faBagShopping} className="mb-2" />
                        Shop
                    </Link>
                </li>
                <li className='flex flex-col items-center'>
                    <Link to="/cart" className='flex flex-col items-center'>
                        <FontAwesomeIcon icon={faCartShopping} className="mb-2" />
                        Cart ({totalItems})
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default NavBar;
