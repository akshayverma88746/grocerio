import React,{useState} from 'react';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import "./cart.css";
import Navbar from '../Navbar/Navbar';
import {loadStripe} from '@stripe/stripe-js';


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
    
    const handlePayment =async() =>{
        const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
        const res = await fetch("http://localhost:3001/checkout-payment",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(cart)
        })
        if(res.statusCode === 500)return;
        const data = await res.json()
        console.log(data)
        toast.success("Redirecting to payment gateway")
        stripePromise.redirectToCheckout({sessionId:data})
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
                    <button style={{borderRadius: '56% 0% 0% 55% / 42% 25% 25% 42%'}} onClick={()=>handleChange(item, -1)}> - </button>
                    <button style={{borderRadius: '12% 11% 11% 14% / 14% 14% 12% 12%'}}>{item.quantity}</button>
                        <button style={{borderRadius: '0% 54% 51% 0% / 19% 43% 45% 23%'}} onClick={()=>handleChange(item, +1)}> + </button>
                       
                        
                    </div>
                    <div>
                        <span style={{color: 'white'}}>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
            <button className="payment-button" onClick={handlePayment}>Proceed to Payment</button>
        </div>
    </article>
  )
}

export default Cart