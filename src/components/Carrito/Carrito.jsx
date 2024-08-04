import React from 'react'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"


const Carrito = () => {

    const { carrito, precioTotal, borrarProducto,vaciarCarrito } = useContext(CartContext)


    return (
        <div>
            <ul>
                {carrito.map((productoCarrito) => (

                    <li key={productoCarrito.id}>
                        <img width={150} src={productoCarrito.imagen} alt="" />
                        <p>{productoCarrito.nombre} </p>
                        <p>Cantidad:{productoCarrito.cantidad}</p>
                        <p>Precio c/u:{productoCarrito.precio}</p>
                        <p>Precio parcial:{productoCarrito.precio * productoCarrito.cantidad}</p>
                        <button onClick={()=>borrarProducto(productoCarrito.id)}>quitar</button>
                        
                    </li>
                ))
                }
            </ul>

            <h3>Precio Total: {precioTotal()}</h3>
            <button onClick={vaciarCarrito}>vaciar carrito</button>
        </div>
    )
}

export default Carrito