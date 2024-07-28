import React, { useEffect, useState } from 'react'

const Contador = ({producto, agregarAlCarrito}) => {

    

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
        <button className='btn' onClick={()=>agregarAlCarrito(contador)}>agregar al carrito</button>
        
        </div>
    )
}

export default Contador