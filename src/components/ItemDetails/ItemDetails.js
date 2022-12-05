import React from 'react';
import './ItemDetails.css';
import ItemCount from '../ItemCount/ItemCount';
import ProductSelect from '../ProductSelect/ProductSelect';

const ItemDetails = ({selectedProduct}) => {
    
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
                    <ItemCount />
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetails;