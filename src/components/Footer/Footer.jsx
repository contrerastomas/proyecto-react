import React from 'react'
import "../Footer/Footer.scss"
import tarjetas from "../../assets/images/tarjetas.png"


const Footer = () => {

    return (
        <div>
            <footer>

            < div className="contenedorFooter" >
            <h2>Pixel Games</h2>
            <p>
                Direccion:Avenida Corrientes 6271 CABA <br/>
                Numero de telefono:1145679341 <br/>
                Email:tomasportunato@outlook.com <br/>
                Gracias por elegirnos
                <br/> <br/>
                Los precios expresados no incluyen IVA y estan sujetos a cambio si previo aviso. <br/>
                Las fotos son a modo ilustrativo. <br/>
                La venta de cualquiera de los productos publicados esta sujeta a la verificación de stock. <br/>
                Las especificaciones técnicas y descripciones estan sujetas a cambios sin previo aviso.
            </p>
        </div>

        <div id='tarjetas'>
            <h3>Formas de pago</h3>
            <img src={tarjetas} alt=""/>
        </div>

            </footer>
        </div>
    )
}

export default Footer





    

