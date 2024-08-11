import React, { useEffect, useState } from 'react'
import Contador from '../Main/Contador'
import "../ItemDetailContainer/ItemDetailContainer.scss"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({ producto }) => {

    const { agregarProducto } = useContext(CartContext)
    const [mostrarContador, setMostrarContador] = useState(true)


    const agregarAlCarrito = (contador) => {
        const productosCarrito = { ...producto, cantidad: contador }
        agregarProducto(productosCarrito)
    
    //ocultamos el contador
    setMostrarContador(false)
    
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
                    <Link className="inicio" to={"/"} >volver</Link>
                </div>

                <div className='dataContainer'>
                    {
                        mostrarContador ? (<Contador producto={producto} agregarAlCarrito={agregarAlCarrito} />) : (<Link className='link' to={"/carrito"}> Ver carrito</Link>)
                    }


                </div>

            </div>

        </div>
    )
}

export default ItemDetail