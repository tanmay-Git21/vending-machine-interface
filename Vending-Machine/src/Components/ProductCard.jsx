import React from 'react'
import '../CSS/ProductCard.css'

function ProductCard() {







  return (
    <div className='card'>
        <div className='product-img'>
            img here
        </div>
        <div className='product-name'>
            Lays Classic salted chips
        </div>
        <div className='product-info'>
        Qty: 10 | Rs. 10

        </div>
        <div className='product-add'>
            <button className='addButton'>ADD</button>
        </div>
    </div>
  )
}

export default ProductCard