import React , {useState, useContext} from "react";
const CartContext = React.createContext([])
export const useCartContext = () => useContext (CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const clearCart = () => setCart([])
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
    
    const addProduct = (items, quantity) => {
		if (isInCart(items.id)) {
			setCart(
				cart.map((product) => {
					return product.id === items.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...items, quantity}]);
		}
	};
    console.log("Array Carrito", cart)

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider