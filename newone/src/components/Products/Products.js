import React from 'react'
import './products.css';
import Fruit from './fruit.json';

function Products({handleClick,size,setshow}) {
  return (
   <>
<h1 className="f-fruits">Fruits</h1>
        <div className="f-element">
{
    Fruit.map(item=>(
            <div className="f-cards" key={item.id}>
    
                <img className='f-img' src={item.image}/>
                <div className="info">
                    <h1 className="text">{item.name}</h1>
                    <p>{item.price}/Kg</p>
                    <button className='btn' onClick={() => handleClick(item)}>Add to cart
                    </button>
                </div>
            </div>
   )) }


        </div>
   </>
  )
}

export default Products