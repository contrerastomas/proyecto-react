import React from 'react'
import Contador from "../Main/Contador"


const Item = ({producto}) => {
    return (
        <div className='card'>
                        <img src={producto.imagen} alt="" />
                        <h3>{producto.nombre} </h3>
                        <p>{producto.descripcion} </p>
                        <p>{"stock:" + producto.stock} </p>
                        <p>{producto.precio} </p>
                        <Contador />
                        <button >agregar al carrito</button>
                    </div>
    )
}

export default Item