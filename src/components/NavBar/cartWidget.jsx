import React from 'react'
import { IoCart } from "react-icons/io5";

const CartWidget = () => {
    return (
        <div className='contenedorCarrito'>
            <IoCart className='carrito'/>
            <p>0</p>
        </div>
    )
}

export default CartWidget