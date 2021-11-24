import React from 'react'
import ItemCount from 'containers/ItemCount/ItemCount';

export default function Item(product) {
    return (
        <div>
            <img src={product.image}/>
            <h2>{product.name}</h2>
            <h4>{product.description}</h4>
            <h4>{product.price}</h4>
            <ItemCount /> 
        </div>
    )
}
