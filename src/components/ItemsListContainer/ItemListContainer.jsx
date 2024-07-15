import React from 'react'
import "../ItemsListContainer/ItemListContainer.scss"
import obtenerProductos from "../../data/data.js"
import ItemList from './ItemList.jsx'
import { useState, useEffect } from 'react'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerProductos()

            .then((respuesta) => {
                setProductos(respuesta)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                console.log("promesa finalizada")
            })
    }, [])

    return (
        <ItemList productos={productos} />

    )
}

export default ItemListContainer
