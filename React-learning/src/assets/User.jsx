import React from 'react'
import './user.css'
function User({img,price,title}) {
  
  return (

   <div className='box'>
    <img src={img}cc />
    <h3>{price}</h3>
    <h2>{title}</h2>
   </div>
 
  )
}

export default User