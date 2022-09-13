import React, {useEffect, useState} from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    const Decrease = () => { 
        setCount(count - 1)
    }
    const Increase = () => { 
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    return (
        <div className="counter">
            <button className='btn m-2' disabled={count <= 1} onClick={Decrease}><img src="/img/decrease.png" width="15" title="Disminuir" alt=""/></button>
            <span>{count}</span>
            <button className='btn m-2' disabled={count >= stock} onClick={Increase}><img src="/img/increase.png" width="15" title="Aumentar" alt=""/></button>
            <div className='py-2'>
                <button className='btn btn-success' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar el Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;