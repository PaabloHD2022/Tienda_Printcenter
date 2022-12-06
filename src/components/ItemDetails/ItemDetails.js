import React from 'react';
import './ItemDetails.css';
import ItemCount from '../ItemCount/ItemCount';
import ProductSelect from '../ProductSelect/ProductSelect';
import { useState, useContext, } from 'react';
import { cartContext} from '../../Context/CartProvider';

const ItemDetails = ({selectedProduct}) => {
    const [count, setCount] = useState(1);
    const { cart, addToCart } = useContext(cartContext)
    console.log(selectedProduct);

    return (
        <>
        <div className='productSelect'>
        <ProductSelect />
        </div>
        <div className="Card_Item_Selected">
            <div className='Img2'>
                <img alt="Imagenes de productos" src={selectedProduct.img} />
            </div>
            <div className='info_card2'>
                <h2 className='titulo2'>{selectedProduct.nombre}</h2>
                <p className='p_minima2'>Produccion Mínima: {selectedProduct.produccion_minima}</p>
                <p className='desc2'>Descripción: {selectedProduct.descripcion}</p>
                <p className='precio2'>Precio: ${selectedProduct.precio}</p>
                <div className='stockcount'>
                    <p className='stock'>Stock: {selectedProduct.stock}</p>
                    <h2>{ count }</h2>
                    <ItemCount setCount={setCount} />
                    <button onClick={() => addToCart (selectedProduct, count)}> Agregar al Carrito </button>
                    <h3>Cantidad de productos en el carrito {cart.length}</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetails;