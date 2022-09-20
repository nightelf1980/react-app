import React , {useState, useContext} from "react";
const CartContext = React.createContext([])
export const useCartContext = () => useContext (CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const clear = () => setCart([])
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))
    
    const addItem = (items, quantity) => {
		if (isInCart(items.id)) {
			setCart(
				cart.map((product) => {
					return product.id === items.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				})
			);
		} else {
			setCart([...cart, { ...items, quantity:quantity}]);
		}
	};
    console.log("Array Carrito", cart)

    return (
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem, 
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider