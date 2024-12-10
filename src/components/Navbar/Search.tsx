import React from 'react'
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className='input_bar'>
 <input placeholder='Rechercher un produit'
 />

<CiSearch style={{width:"49px", height:"50px"}}/>
    </div>
  )
}

export default Search