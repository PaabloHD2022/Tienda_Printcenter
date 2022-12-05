import React from 'react';
import { useState } from "react"

const ItemCount = () => {

    const [contador, setContador] = useState(0);

    const add = () => {
        setContador(contador + 1)
        if(contador === 0)
        return
    }

    const less = () => {
        setContador(contador -1)
    }

    return (
        <div>
            <p>
                {contador}
            </p>
            <div className="btn_contador">
                <button className="boton_contador" onClick={add}>Agregar</button>
                <button className="boton_contador" onClick={less}>Quitar</button>
            </div>
        </div>
    )
};

export default ItemCount