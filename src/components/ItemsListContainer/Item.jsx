import React, { useEffect, useState } from 'react'
import Contador from "../Main/Contador"
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {

    const capturar = () => {

    }


    return (
        <Link to={"/detalle/"+producto.id} className='card' onClick={capturar} >
            <img src={producto.imagen} alt="" />
            <h3>{producto.nombre} </h3>

            <p>{"stock:" + producto.stock} </p>
            <p>Precio:{producto.precio} </p>
            <Contador producto={producto} />
            <button >agregar al carrito</button>
            <button onClick={capturar}>ver mas</button>
        </Link>
    )
}

export default Item