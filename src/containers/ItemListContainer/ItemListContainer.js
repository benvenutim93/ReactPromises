import React,{useState, useEffect} from 'react'


export default function ItemListContainer(props) {
    const[products, setProducts] = useState([]);

    const promise = new Promise ((resolve,reject) => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => resolve(err))
        },2000);
    })

    promise.then(data => console.log(data));
    

    return (
        <div>
            <h3 className= 'font-black'>Estamos trabajando para vos...</h3>
            <p>
                Proximamente encontrarás {props.products}
            </p>
            <ItemList products={products}/>
        </div>
    )
}

