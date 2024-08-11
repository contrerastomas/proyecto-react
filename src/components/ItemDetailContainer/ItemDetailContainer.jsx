import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.jsx'
import "../ItemDetailContainer/ItemDetailContainer.scss"
import { useParams } from 'react-router-dom'
import CargandoPantalla from '../pantallaCarga/CargandoPantalla.jsx'
import { getDoc, doc } from 'firebase/firestore'
import db from '../../db/db.js'




const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const { idProducto } = useParams()
    const [cargando, setCargando] = useState(false)

    const obtenerProductos = async () => {

        try {

            const docRef = doc(db, "productos", idProducto)
            const dataDb = await getDoc(docRef)
            const data = { id: dataDb.id, ...dataDb.data() }
            setProducto(data)
            setCargando(false)

        } catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
        setCargando(true)
        obtenerProductos()
    }, [])
    return (
        <div>
            {
                cargando ? (<CargandoPantalla />) : (<ItemDetail producto={producto} />)
            }
        </div>


    )
}

export default ItemDetailContainer