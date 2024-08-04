import React, { useEffect } from 'react'
import Contador from '../Main/Contador'
import "../ItemDetailContainer/ItemDetailContainer.scss"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



const ItemDetail = ({ producto }) => {

    const {agregarProducto}=useContext(CartContext)



    const agregarAlCarrito = (contador) => {
        const productosCarrito = { ...producto, cantidad: contador }
        agregarProducto(productosCarrito)
    }

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
                    <Contador producto={producto} agregarAlCarrito={agregarAlCarrito} />

                </div>

            </div>

        </div>
    )
}

export default ItemDetail