import React from 'react'
import "../Main/Main.scss"
import Card from "../Main/Card"
import Banner from "./Banner"

import bannerFondo from "../../assets/images/banner.jpg"
import joystickXbox from "../../assets/images/31.jpg";




const Main = () => {
    return (
        <div>
            <main>
        <Banner  nombre={bannerFondo} />
        <div className='contenedorCards'> 
        <Card   imagen={joystickXbox} />
        <Card   imagen={joystickXbox} />
        <Card   imagen={joystickXbox} />


        </div>




            </main>
        </div>
    )
}

export default Main