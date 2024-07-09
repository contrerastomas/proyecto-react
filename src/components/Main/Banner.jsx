import React from 'react'
const Banner = ({nombre}) => {

    return (
        <div>
            <img className='banner' src={nombre} alt={nombre} />
        </div>
    )
}

export default Banner