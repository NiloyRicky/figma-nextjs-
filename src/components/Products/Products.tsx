import React from 'react'
import './Products.css'
function Products() {
  return (
    <div className='products'>
        <div className='products_title'>
            <p className='articles'>Articles similaires</p>
            <p className='collection'>Voir toute la collection</p>
             </div>



        <div className='products_images'>
            <div className='product_img'><img src="./images/Card_Product.png"/></div>
            <div className='product_img'><img src="./images/Card_Product.png"/></div>
            <div className='product_img'><img src="./images/Card_Product.png"/></div>
            <div className='product_img'><img src="./images/Card_Product.png"/></div>
            <div className='product_img'><img src="./images/Card_Product.png"/></div>
             </div>
    </div>
  )
}

export default Products