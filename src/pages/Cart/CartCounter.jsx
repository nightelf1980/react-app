import {useState, useEffect} from 'react'
import { useCartContext } from "../../context/CartContext"

export default function CartCounter({ inicialValue, product, maxStock }) {

    const [contador, setContador] = useState(0);
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
                <i className="fa-solid fa-minus text-danger" />
            </button>
            
                {contador}
            
            <button className='btn m-2' onClick={addToCounter}>
                <i className="fa-solid fa-plus text-success" />
            </button>
        </td>
      </>
    );
  }