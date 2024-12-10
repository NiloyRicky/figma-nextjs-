import React from 'react'
import './Hero.css'
function Left() {
  return (
    <div className='left'>
        <div className='linear_table'>
            <div className='table_dark'>
                <img src="./images/tableDark.png" />
            </div>

            <div className='table_light'>
                <img src="./images/tableDark.png" />
            </div>
            <div className='table_light'>
                <img src="./images/tableDark.png" />
            </div>
            <div className='table_light'>
                <img src="./images/tableDark.png" />
            </div>
        </div>
       <div className='big_img'>
       <img src="./images/cheese.png.png" className='cheese'/>
       </div>
    </div>
  )
}

export default Left