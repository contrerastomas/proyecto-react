import React from 'react'
import { IoCart } from "react-icons/io5";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext);
    let cantidad = cantidadTotal()

    return (
        <Link to={"/carrito"} className='contenedorCarrito'>
            <IoCart className='carrito' style={cantidad === 0 && { color: "blue" }} />
            <p>{cantidad > 0 && cantidad}</p>
        </Link>
    )
}

export default CartWidget
