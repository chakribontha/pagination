import React from 'react'

function Product({ product }) {
  return (
    <div className="product">
     
        <img src={product.images[0]} alt={product.title} />
        <div>{product.title}</div>
        <div>{product.description}</div>

    </div>
  );
}

export default Product
