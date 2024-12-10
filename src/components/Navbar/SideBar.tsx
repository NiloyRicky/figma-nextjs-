import React from 'react'

function SideBar() {
  return (
    <div>
        <span className='inspirations'>
           <img src="./images/lightbulb-01.png" className='lightbulb'/> <p>Inspirations</p>
            </span>
        <span className='mes_favoris'>
            <img src="./images/heart.png" style={{width:"20px" ,height:"20px"}}/>
            <p>
        Mes favoris</p>
       <span className='p24_layout'>24</span></span> 
       <span className='cart'>
        <img src="./images/shopping.png" className='cart_img'/>
        <p className='cart_p'>panier</p>

       </span>
       <span className='circle'></span>
    </div>
  )
}

export default SideBar