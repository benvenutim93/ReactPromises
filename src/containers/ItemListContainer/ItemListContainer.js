import React,{useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer(props) {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => resolve(err))
    },[]);
    

    return (
        <div>
            <h3 className= 'font-black'>Estamos trabajando para vos...</h3>
            <p>
                Proximamente encontrarás {props.products}
            </p>
            <ItemList products={products}/>
            {/* <ItemCount /> */}
        </div>
    )
}

