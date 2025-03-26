import { useState } from "react";

const CartCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

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
        <div className="cart-card-container bg-white p-4 rounded-lg shadow-md flex-row">
            <img
                src={product.image}
                alt={product.title}
                className="w-48 h-48 object-contain mx-auto"
            />
            <h2 className="text-lg font-semibold cursor-pointer ">{product.title}</h2>
            <h3 className="text-gray-700 text-md font-bold ">${product.price}</h3>
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="numInput border border-gray-300 rounded-lg p-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default CartCard;