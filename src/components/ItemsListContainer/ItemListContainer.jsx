import React from 'react'
import "../ItemsListContainer/ItemListContainer.scss"
import { obtenerProductos } from "../../data/data.js"
import ItemList from './ItemList.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { idCategoria } = useParams()

    useEffect(() => {
        obtenerProductos()
            .then((respuesta) => {

                if (idCategoria) {
                    const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria)
                    setProductos(productosFiltrados)

                } else {
                    setProductos(respuesta)

                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                console.log("promesa finalizada")

            })
    }, [idCategoria])








    return (
        <ItemList productos={productos} />

    )
}

export default ItemListContainer
