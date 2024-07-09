import React from 'react'
import Contador from "../Main/Contador"

const Card = ({ imagen }) => {


    return (
        <div className='card'>
            <img className='cardImage' src={imagen} alt="" />
            <p>producto</p>
            <Contador />
            <button >agregar al carrito</button>
        </div>
    )
}

export default Card