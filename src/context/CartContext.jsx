import React , {useState, useContext} from "react";

const CartContext = React.createContext([])

export const useCartContext = () => useContext (CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const clearCart = () => setCart([])
    const isInCart = (id) => cart.find(product => product.id === id)
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))
    
/*     const removeItem = (id) => {
        
        let position = cart.findIndex(x => x.id === id)
        
        setCart(position)
        cart.splice(position,1)
    } */

    const addItem = (items, quantity) => {
        if (isInCart(items.id)) {
            setCart(cart.map(product => {
                return product.id === items.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, {...items, quantity}]);
        }
    }

    const deleteItem = () => {
        
    }



    const totalProducts = () => cart.reduce((counter, productoActual) => counter + productoActual.quantity, 0)

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    console.log("Array Carrito", cart)

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeItem,
            addItem, 
            totalProducts,
            totalPrice,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider