import React from 'react'
import { kitchenData } from '../data/Kitchen';

const Kitchen = () => {

  const firstFiveImages=kitchenData.slice(0,5);
  return (
   <>
   <div className='proTitle'>
   <h2>KitchenData</h2>
   </div>
    <div className='proSection'>
      {firstFiveImages.map((item)=>{
        return(
          <>
          <div className='cotentBox'>
         <div className='imgBox'>
            <img className='proimage' src={item.image} alt="" />
          </div>
          <div>
            <h4>{item.model}</h4>
            <h6>From ₹{item.price}</h6>
          </div>
         </div>
          </>
        )
      })}
    </div>
   </>
  )
}

export default Kitchen
