import React from 'react'
import './Breadcrums.css'
function Breadcrums() {
  return (
    <div className='breadcrums'>
        <span style={{width:"39px" ,height: "21px"}} className='home'>Home</span>
        <span><img src="./images/ellipse2.png"/></span>
        <span className='table'  style={{width:"95px" ,height: "21px"}}>Art de la table</span>
    </div>
  )
}

export default Breadcrums