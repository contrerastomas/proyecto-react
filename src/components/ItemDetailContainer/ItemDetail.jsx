import React from 'react'
import Contador from '../Main/Contador'
import "../ItemDetailContainer/ItemDetailContainer.scss"


const ItemDetail = ({ producto }) => {
    return (
        <div className='itemDetail'>
            <div className='contenedorImagenDetail'>
                <img src={producto.imagen} alt="" />
            </div>
            <div className='contenedorTextos'>
                <div className='textContainer'>
                    <h3>{producto.nombre} </h3>
                    <p className='cardDescripcion'>{producto.descripcion} </p>

                </div>

                <div className='priceContainer'>
                    <p>{"stock:" + producto.stock} </p>
                    <p>Precio:{producto.precio} </p>
                </div>

                <div className='dataContainer'>
                    <Contador />
                    <button >agregar al carrito</button>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail