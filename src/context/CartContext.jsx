import { createContext, useState } from "react";

const CartContext = createContext()


const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);


    const agregarProducto = (productoNuevo) => {
        const condicion = estaEnCarrito(productoNuevo.id)
        if (condicion) {
            let nuevoCarrito = [...carrito]
            nuevoCarrito.forEach((productoCarrito) => {
                if (productoCarrito.id === productoNuevo.id) {
                    productoCarrito.cantidad = productoCarrito.cantidad + productoNuevo.cantidad
                }
            })
            setCarrito(nuevoCarrito)
        } else {
            setCarrito([...carrito, productoNuevo])

        }

    }

    const cantidadTotal = () => {
        const totalProductos = carrito.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0)
        return totalProductos
    }

    const precioTotal = () => {
        const precio = carrito.reduce((total, productoCarrito) => total + (productoCarrito.cantidad * productoCarrito.precio), 0);
        return precio;
    };


    const borrarProducto = (idProducto) => {
        const porductosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto)

        setCarrito(porductosFiltrados)

    }

    const vaciarCarrito = () => {
        setCarrito([])
    }
    const estaEnCarrito = (idProducto) => {

        const condicion = carrito.some((productoCarrito) => productoCarrito.id === idProducto)
        return condicion
    }

    return (
        <CartContext.Provider value={{ carrito, agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
