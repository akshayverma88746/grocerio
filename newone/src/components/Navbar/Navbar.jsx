import React, { useState, useContext } from 'react'
import "./navbar.css"
import {useNavigate, useLocation, Link} from "react-router-dom";
import { ShoppingBasket, UserCircle2 } from 'lucide-react';
import Dropdown from '../Dropdown/Dropdown';
import {UserContext} from "../../App"


const Navbar = ({size, setShow}) => {
  const loaction = useLocation()
  const history = useNavigate();
  const {state, dispatch} = useContext(UserContext);
  const [openProfile, setOpenProfile] = useState(false);
  if(state){
    return (
        <>
        <div className="hero">
                <nav>
                    <h2 className="logo"><span style={{color: '#e7b031'}}>G</span>rocerio</h2>
                    <ul>
                        <div className='comp' style={{paddingRight: '35rem'}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Service</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </div>
                    </ul>
                        <Link to="/cart">
                        <div className='cart' >
                            <ShoppingBasket  color="#ffffff" />
                            <span>{size}</span>
                        </div>
                            </Link>
                        <div className='search-box'>
                            <input  className="search-txt" type="text" name=" " placeholder='Type to search'/>
                            <a className='search-btn' href='#'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a> 
                        </div>
                        <div className='user'>
                            <Link to="#"><UserCircle2 size={25} color="#ffffff" onClick={() => setOpenProfile((prev) => !prev)}/></Link>
                        </div>
                        {
                            openProfile && <Dropdown/>
                        }
                        
                       
                </nav>
        </div>
    </>
  )
}
else{
    return (
        <>
        <div className="hero">
                <nav>
                    <h2 className="logo"><span style={{color: '#e7b031'}}>G</span>rocerio</h2>
                    <ul>
                        <div className='comp' style={{paddingRight: '35rem'}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Service</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </div>
                    </ul>
                    <Link to="/cart">
                        <div className='cart' >
                            <ShoppingBasket  color="#ffffff" />
                            <span>{size}</span>
                        </div>
                            </Link>
                        <div className='search-box'>
                            <input  className="search-txt" type="text" name=" " placeholder='Type to search'/>
                            <a className='search-btn' href='#'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a> 
                        </div>
                        <Link to="/login"><button type="button" className='button-18'>Sign In</button></Link>
                </nav>
        </div>
    </>
    )
}
}

export default Navbar