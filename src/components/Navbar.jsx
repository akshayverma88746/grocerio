import React from 'react'
import "./navbar.css"
import {BrowserRouter as Router, Link, NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <>
        <div class="hero">
                <nav>
                    <h2 class="logo"><span style={{color: '#e7b031'}}>G</span>rocerio</h2>
                    <ul>
                        <div className='comp' style={{paddingRight: '35rem'}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Service</Link></li>
                            <li><Link to="#">Products</Link></li>
                        </div>
                    </ul>
                        <div className='search-box'>
                            <input  className="search-txt" type="text" name=" " placeholder='Type to search'/>
                            <a className='search-btn' href='#'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a> 
                        </div>
                        <Link to="/login"><button type="button" className='button-18'>Sign In</button></Link>
                </nav>
            </div>
    </>
  )
}

export default Navbar