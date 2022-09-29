import React, {useEffect, useState} from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));
    
    const decrease = () => { 
        setCount(count - 1)
    }
    
    const increase = () => { 
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    return (
        <div className="counter">
            <button className='btn m-2' disabled={count <= 1} onClick={decrease}><i class="fa-solid fa-minus text-danger" title="Disminuir" alt="Disminuir cantidad"/></button>
            <span>{count}</span>
            <button className='btn m-2' disabled={count >= stock} onClick={increase}><i class="fa-solid fa-plus text-success" title="Aumentar" alt="Aumentar cantidad"/></button>
            <div className='py-2'>
                <button className='btn btn-shop-primary' disabled={stock <= 0} onClick={() => onAdd(count)}>Comprar Ahora</button>
            </div>
            <div className='py-2'>
                <button className='btn btn-cart-primary' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar el Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;