import React from 'react'
import Left from './Left'
import Right from './Right'
import './Hero.css'

function Hero() {
  return (
    <div style={{width:"1600px", display:"flex" }}>
        <Left/>
        <Right/>
    </div>
  )
}

export default Hero