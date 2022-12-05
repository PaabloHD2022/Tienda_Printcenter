import './ItemList.css'
import React from 'react';
import Item from "../Item/Item";
import ProductSelect from '../ProductSelect/ProductSelect';


const ItemList = ({ products }) => {
    
    return (
      <div>
        <div className='productSelect'>
        <ProductSelect />
        </div>      
        <div className='tienda'>
          {products.map ((product) =>(
          <Item key={product.id} product={product}/>
        ) )}
        </div>
      </div>
    )
  }  

export default ItemList; 