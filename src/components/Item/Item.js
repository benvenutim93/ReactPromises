import React from 'react'

export default function Item(product) {
    return (
        <div>
            <img src={product.image}/>
            <h2>{product.name}</h2>
            <h4>{product.description}</h4>
        </div>
    )
}
