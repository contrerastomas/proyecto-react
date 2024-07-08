import React from 'react'
const Banner = ({nombre}) => {

    console.log(nombre)
    return (
        <div>
            <img src={nombre} alt={nombre} />
        </div>
    )
}

export default Banner