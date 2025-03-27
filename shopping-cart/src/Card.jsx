import { useState } from "react";
import { useCart } from "./CartContext";

const Card = ({ product }) => {
    const { addToCart } = useCart(); // Get addToCart from context
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        setQuantity(1);
        console.log(`Adding ${quantity} of ${product.title} to cart`);
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;

        if (value === "") {
            setQuantity(value);
        } else {
            const newQuantity = Math.max(1, Math.min(parseInt(value), 20));
            setQuantity(newQuantity);
        }
    };


    return (
        <div className="card-container bg-white p-4 rounded-lg shadow-md">
            <img
                src={product.image}
                alt={product.title}
                className="w-48 h-48 object-contain mx-auto"
            />
            <h2 className="text-lg font-semibold cursor-pointer ">{product.title}</h2>
            <h3 className="text-gray-700 text-md font-bold ">${product.price}</h3>
            <div>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="numInput border border-gray-300 rounded-lg p-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card;