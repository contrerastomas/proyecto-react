import React, { useState, useEffect } from 'react'
import obtenerProductos from '../../data/data.js'
import ItemDetail from './ItemDetail.jsx'
import "../ItemDetailContainer/ItemDetailContainer.scss"



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        obtenerProductos()
            .then((data) => {
                const productoEncontrado = data.find((productoData) => productoData.id === 2)
                setProducto(productoEncontrado)
            })
    }, [])
    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer