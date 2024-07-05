import React from 'react'


const cartWidget = (nombre) => {
    return (
        <div>
            <a className="itemLogos" href="#"><img src={nombre} alt="" /></a>
        </div>
    )
}

export default cartWidget