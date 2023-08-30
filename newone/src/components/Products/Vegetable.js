import React from 'react'
import './products.css'
import Vegi from './vegi.json'

import { useState } from 'react'

function Vegetable({handleClick,size,setShow}) {
  
  return (
    <>
    <h1 className="f-fruits">Vegetables</h1>
            <div className="f-element">
    {
        Vegi.map(item=>(
                <div className="f-cards" key={item.id}>
        
                    <img className='f-img' src={item.image}/>
                    <div className="info">
                        <h1 className="text">{item.name}</h1>
                        <p>{item.price}/Kg</p>
                        <button className='btn' onClick={() => handleClick(item)}>Add to Cart</button>
                    </div>
                </div>
       )) }
    
    
            </div>
       </>
  )
}

export default Vegetable