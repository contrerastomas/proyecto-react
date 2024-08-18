import React from 'react'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import './Carrito.scss'

const Carrito = () => {

    const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext)

    if (carrito.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>El carrito está vacío</h2>
                <Link className='link' to={"/"}>ver productos</Link>
            </div>
        )
    }

    return (
        <div className="carrito-container1" >
            <div className="carrito-container">

                <ul className="carrito-lista">
                    {carrito.map((productoCarrito) => (
                        <li className="carrito-item" key={productoCarrito.id}>
                            <img width={150} src={productoCarrito.imagen} alt="" />
                            <p>{productoCarrito.nombre} </p>
                            <p>Cantidad: {productoCarrito.cantidad}</p>
                            <p>Precio c/u: {productoCarrito.precio}</p>
                            <p>Precio parcial: {productoCarrito.precio * productoCarrito.cantidad}</p>
                            <button onClick={() => borrarProducto(productoCarrito.id)}>Quitar</button>
                        </li>
                    ))}
                </ul>

                <div className="carrito-total">
                    <h3>Precio Total: {precioTotal()}</h3>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link className='terminar' to={"/checkout"}>Terminar Compra</Link>
                    <Link className="inicio" to={"/"} >volver</Link>
                </div>

            </div>

        </div>
    )
}

export default Carrito
