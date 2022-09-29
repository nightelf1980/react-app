import {useState, useEffect} from 'react'
import { useCartContext } from "../../context/CartContext"

export default function CartCounter({ inicialValue, product, maxStock }) {

    const [contador, setContador] = useState();
    const { handleQuantity } = useCartContext();
    const addToCounter = () => {
      if (contador < maxStock) {
        setContador((prevContador) => {
          let contador = prevContador + 1;
          handleQuantity(product, contador);
          return contador;
        });
      }
    };

    const substractCounter = () => {
      if (contador > 1) {
        setContador((prevContador) => {
          let contador = prevContador - 1;
          handleQuantity(product, contador);
          return contador;
        });
      }
    };

    useEffect(() => {
      setContador(inicialValue);
    }, [inicialValue]);

    return (
      <>
        <td className="align-middle text-center">
            <button className='btn m-2' onClick={substractCounter}>
                <img src="/img/decrease.png" width="15" title="Disminuir" alt="Disminuir"></img>
            </button>
            
                {contador}
            
            <button className='btn m-2' onClick={addToCounter}>
                <img src="/img/increase.png" width="15" title="Agregar"alt="Agregar"/>
            </button>
        </td>
      </>
    );
  }