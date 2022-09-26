
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [shop, setShop] = useState([]);
    const [count ,setCount] = useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setShop(data))

    },[shop])

    const addToCard =(id)=>{
        const newCount =[...count, count]
        setCount(newCount)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    shop.map(product => <Product 
                    key={product.id}
                    products={product}
                    addto={addToCard}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                <Card count={count}></Card>
            </div>
        </div>
    );
};

export default Shop;