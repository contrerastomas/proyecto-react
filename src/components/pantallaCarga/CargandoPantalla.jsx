import React from 'react'
import "../pantallaCarga/Cargando.scss"
import { PacmanLoader } from 'react-spinners'



const Cargando = () => {


    return (
        <div className='cargando'><   PacmanLoader size={50} color='#4caf50' /></div>
    )
}

export default Cargando