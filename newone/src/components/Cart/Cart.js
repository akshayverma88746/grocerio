import React,{useState} from 'react';
import { useEffect } from 'react';
import "./cart.css";
import Navbar from '../Navbar/Navbar';
const Cart = ({cart, setCart, handleChange,setShow,size}) => {
    const [price, setPrice] = useState(0);
    console.log(cart)
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.quantity * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    },[cart]);

  return (
    <article>
    <Navbar size={size} setShow={setShow}/>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.image} />
                        <p>{item.name}</p>
                    </div>
                    <div>
                    <button onClick={()=>handleChange(item, -1)}> - </button>
                    <button>{item.quantity}</button>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                       
                        
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
            <button className="payment-button">Proceed to Payment</button>
        </div>
    </article>
  )
}

export default Cart