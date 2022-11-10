/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

function Products({Products}) {
  return (
    <div className='products'>
      {Products.map((product, idx) => {
        <Product key={idx} product={product}/>
      })}
    </div>
  )
}

export default Products;