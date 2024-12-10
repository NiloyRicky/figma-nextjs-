import React from 'react'
import './Hero.css'
import HeroMid from './HeroMid'
import HeroBottom from './HeroBottom'

function Right() {
  return (
    <>
    <div className='right'>
        <div className='right1'>
            <p className='right1_p'>Cheese – appareil à raclette 1/2 roue</p>
            <img src="./images/heart.png"/>
        </div>
        <div className='right2'>
          <p className='euro'>39,50€</p><p className='piece'>/pièce</p>
        </div>
        <div className='right3'>
          
<div className='layout1'><img src="./images/capa.png"/><p>20<sup>cm</sup></p></div>
<div className='layout2'><img src="./images/Frame.png"/><p>50<sup>cm</sup></p></div>


        </div>
        <div className='layout3'><p>RÉF : VABGN5</p></div>
    </div>
    <HeroMid/>
    <HeroBottom/>
    </>
  )
}

export default Right