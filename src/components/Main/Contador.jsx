import React, { useEffect, useState } from 'react'

const Contador = ({producto}) => {

    

const [contador,setContador]=useState(0)


    const aumentarContador = ()=>{
        if(contador<producto.stock){
    
            setContador(contador+1)
        }
    
    }
    
    const disminuirContador = ()=>{
    
        if(contador>0){
            setContador(contador-1)
    
        }
    }

    return (
        <div>
        <p>cantidad: {contador} </p>
        <button className='btn' onClick={aumentarContador}>+</button>
        <button className='btn' onClick={disminuirContador}>-</button>

        </div>
    )
}

export default Contador