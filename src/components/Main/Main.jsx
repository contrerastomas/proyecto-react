import React from 'react'
import "../Main/Main.scss"
import Banner from "./Banner"

import bannerFondo from "../../assets/images/banner.jpg"

const Main = () => {
    return (
        <div>
            <main>
        <Banner  nombre={bannerFondo} />
        
            </main>
        </div>
    )
}

export default Main