import React, { useContext, useState } from 'react'
import "../Checkout/checkout.scss"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import db from "../../db/db.js"
import Formulario from "../Checkout/Formulario.jsx"


const Checkout = () => {

    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    })

    const { carrito, precioTotal } = useContext(CartContext)
    const [idOrden, setIdOrden] = useState(null)


    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
    }



    const handleSubmitForm = (event) => {
        event.preventDefault()
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal()

        }
        sendOrder(orden)
    }



    const sendOrder = async (orden) => {
        try {
            const ordenRef = collection(db, "ordenes");
            const ordenDb = await addDoc(ordenRef, orden);
            setIdOrden(ordenDb.id)



        } catch (error) {
            console.error(Error);
        }
    }



    return (
        <div>
            {
                idOrden ? (
                    <div className='orden'>
                        <h2>Orden completada con exito!!</h2>
                        <p>Guarde el id de su orden generada :{idOrden}</p>
                    </div>
                ) : (
                    <Formulario
                        datosForm={datosForm}
                        handleChangeInput={handleChangeInput}
                        handleSubmitForm={handleSubmitForm}
                    />

                )
            }
        </div>




    )
}

export default Checkout