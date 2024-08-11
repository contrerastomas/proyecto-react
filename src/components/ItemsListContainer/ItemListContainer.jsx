import React from 'react'
import "../ItemsListContainer/ItemListContainer.scss"
import ItemList from './ItemList.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CargandoPantalla from '../pantallaCarga/CargandoPantalla.jsx'
import { getDocs, collection, query, where } from 'firebase/firestore'
import db from '../../db/db.js'



const ItemListContainer = () => {



    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)
    const { idCategoria } = useParams()



    const obtenerProductos = async () => {

        try {
            const productosRef = collection(db, "productos")
            const dataDb = await getDocs(productosRef)
            const data = dataDb.docs.map((productoDb) => {
                return {
                    id: productoDb.id, ...productoDb.data()
                }
            })
            setProductos(data)
            setCargando(false)


        } catch (error) {
            console.error(error);

        }

    }



    const obtenerProductosCategoria = async () => {

        try {
            const productosRef = collection(db, "productos")
            const q = query(productosRef, where("categoria", "==", idCategoria))
            const dataDb = await getDocs(q)
            const data = dataDb.docs.map((productoDb) => {
                return {
                    id: productoDb.id, ...productoDb.data()
                }
            })
            setProductos(data)
            setCargando(false)

        } catch (error) {
            console.error(error);

        }
    }


    useEffect(() => {
        setCargando(true)

        if (idCategoria) {
            obtenerProductosCategoria()
        } else {
            obtenerProductos()

        }


    }, [idCategoria])








    return (
        <div>
            {
                cargando ? (<CargandoPantalla />) : (<ItemList productos={productos} />)
            }
        </div>

    )
}

export default ItemListContainer
