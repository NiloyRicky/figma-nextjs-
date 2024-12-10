import React from 'react'
import HeroineLeft from './HeroineLeft'
import HeroineRight from './HeroineRight'
import './Heroine.css';
function Heroine() {
  return (
    <div className='heroine'>
        <HeroineLeft/>
        <HeroineRight/>
    </div>
  )
}

export default Heroine