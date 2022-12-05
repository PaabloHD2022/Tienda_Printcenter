import './ItemDetailContainer.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore, } from 'firebase/firestore';
import ItemDetails from '../../components/ItemDetails/ItemDetails';

const ItemDetailContainer = () => {    
    const [selectedProduct, setselectedProduct] = useState();
    const {id} = useParams();

    const getProduct = () => {
        const db = getFirestore();
        const querySnapshot = doc(db, "items", id);
        getDoc(querySnapshot)
        .then((response) => {
            console.log(response.data());
            setselectedProduct({id: response.id, ...response.data()
            });
        })

        .catch((error) => console.log(error));
    };
    
    useEffect(() =>{
        getProduct();    
    }, [id]);


    return (
        <div className='selected_product'>
            {selectedProduct && <ItemDetails selectedProduct={selectedProduct} />}
        </div>
    )
}

export default ItemDetailContainer;