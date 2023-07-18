import React from 'react';
import { ProductCard } from './product-card';
import { PRODUCTS } from './products-list';
import "./products.css";

export const Products = () => {
    return (
        <div className='products' >
            <div className='productsTitle' >
                <h2> Skincare 4 everyone  </h2>
            </div>
            <div className='productsList'> 
             {PRODUCTS.map((product) => (
                <ProductCard data={product} />
             ))}
            </div>
        
        
        </div>
    )
};
