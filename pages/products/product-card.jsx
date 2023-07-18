import React from 'react';

export const ProductCard = (props) => {
    const { id, productName, productImage, price } = props.data;
    return <div className='product-card'>
        <img src={productImage} />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartButton'> Lo quiero!</button>
    </div>
};