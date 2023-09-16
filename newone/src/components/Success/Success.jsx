import React from 'react'
import Navbar from '../Navbar/Navbar'
import myimg from "./success.svg"
import check from "./check.svg"
import "./success.css";

const Success = () => {
  return (
    <div>
        <Navbar/>
        <img src={myimg} className='success-img'/>
        <br/>
        <img src={check} className='check grow'/>
        <h1 style={{marginLeft: '50rem'}}>Payment Successfull</h1>
    </div>
  )
}

export default Success