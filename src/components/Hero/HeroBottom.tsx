import React from 'react'

function HeroBottom() {
  return (
    <div className='hero_bottom'>
        <div className='white_box'>
            <div className='white_box_img'  ><img src="./images/minus.png" /></div>
            <p>1</p>
            <div className='white_box_img'><img src="./images/plus.png" /></div>
        </div>
        <div className='blue_box'>
            <p className='blue_para'>Ajouter au panier</p>
        </div>
    </div>
  )
}

export default HeroBottom