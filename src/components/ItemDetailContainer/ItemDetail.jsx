import React, { useEffect, useState, useContext } from 'react';
import Contador from '../Main/Contador';
import "../ItemDetailContainer/ItemDetailContainer.scss";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {

    const { agregarProducto } = useContext(CartContext);
    const [mostrarContador, setMostrarContador] = useState(true);

    const agregarAlCarrito = (contador) => {
        const productosCarrito = { ...producto, cantidad: contador };
        agregarProducto(productosCarrito);

        setMostrarContador(false);
    }

    return (
        producto.id ? (
            <div className='itemDetail'>
                <div className='contenedorImagenDetail'>
                    <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className='contenedorTextos'>
                    <div className='textContainer'>
                        <h3>{producto.nombre}</h3>
                        <p className='cardDescripcion'>{producto.descripcion}</p>
                    </div>
                    <div className='priceContainer'>
                        <p>{"stock:" + producto.stock}</p>
                        <p>Precio: {producto.precio}</p>
                        <Link className="inicio" to={"/"}>Volver</Link>
                    </div>
                    <div className='dataContainer'>
                        {mostrarContador ? (
                            <Contador producto={producto} agregarAlCarrito={agregarAlCarrito} />
                        ) : (
                            <Link className='link' to={"/carrito"}>Ver carrito</Link>
                        )}
                    </div>
                </div>
            </div>
        ) : (
            <div>Error: Producto no encontrado</div>
        )
    );
}

export default ItemDetail;
