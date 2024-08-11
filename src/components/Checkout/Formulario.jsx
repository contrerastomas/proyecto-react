import React from 'react'

const Formulario = ({datosForm, handleChangeInput, handleSubmitForm}) => {
    return (
        <div className='contenedorFormulario'>
        <form onSubmit={handleSubmitForm}>
            <label >nombre :</label>
            <input type="text" name='nombre' value={datosForm.nombre} onChange={handleChangeInput} />

            <label >Telefono :</label>
            <input type="text" name='telefono' value={datosForm.telefono} onChange={handleChangeInput} />


            <label >Email :</label>
            <input type="email" name='email' value={datosForm.email} onChange={handleChangeInput} />

            <button type='submit'>Enviar Formulario</button>
        </form>
    </div>
    )
}

export default Formulario