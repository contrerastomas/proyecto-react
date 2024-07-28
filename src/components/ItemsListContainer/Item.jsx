import React, { useEffect, useState } from 'react'
import Contador from "../Main/Contador"
import { Link } from 'react-router-dom'
import { BiFontSize } from 'react-icons/bi'


const Item = ({ producto }) => {


    return (
        <div className='card'  >
            <img src={producto.imagen} alt="" />
            <h3>{producto.nombre} </h3>

            <p>{"stock:" + producto.stock} </p>
            <p>Precio:{producto.precio} </p>


            <Link to={"/detalle/" + producto.id} className='btnShow'>ver mas</Link>
        </div>
    )
}

export default Item