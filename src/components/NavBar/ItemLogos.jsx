import React from 'react'


const ItemLogos = ({nombre}) => {
    return (
        <div>
            <a className="itemLogos" href="#"><img src={nombre} alt={nombre} /></a>
        </div>
    )
}

export default ItemLogos