import React from 'react'
import SofaLeft from './SofaLeft'
import SofaRight from './SofaRight'
import './Sofa.css'

function Sofa() {
  return (
    <div className='sofa'>
        <SofaLeft/>
        <SofaRight/>
    </div>
  )
}

export default Sofa