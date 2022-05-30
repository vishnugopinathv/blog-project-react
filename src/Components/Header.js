import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const[isTrue,setIsTrue]=useState(false);
  return (
    <header>
        <Link to='/' style={{textDecoration:'none',color:'black'}}>
            <div className="page__title">
                <h2>The</h2>
                <h1>Siren</h1>
            </div>
        </Link>
        <nav>
            <ul className={isTrue? 'show__nav' : ""}>
                <Link to='/' style={{textDecoration:'none',color:'black'}} onClick={()=>{setIsTrue(false)}}><li>Home <div className="underline"></div> </li></Link>
                <Link to='/category/hollywood' style={{textDecoration:'none',color:'black'}} onClick={()=>{setIsTrue(false)}}><li>Hollywood <div className="underline"></div></li></Link>
                <Link to='/category/technology' style={{textDecoration:'none',color:'black'}} onClick={()=>{setIsTrue(false)}}>
                    <li>Technology <div className="underline"></div></li>
                </Link>
                <Link to='/category/sports' style={{textDecoration:'none',color:'black'}} onClick={()=>{setIsTrue(false)}}>
                    <li>Sports <div className="underline"></div></li>
                </Link>
                <Link to='/category/health' style={{textDecoration:'none',color:'black'}} onClick={()=>{setIsTrue(false)}}>
                    <li>Health <div className="underline"></div></li>
                </Link>
                <Link to='/category/bollywood' style={{textDecoration:'none',color:'black'}} onClick={()=>{setIsTrue(false)}}>
                    <li>Bollywood <div className="underline"></div></li>
                </Link>
            </ul>
        </nav>
        <i class="fa-solid fa-bars" onClick={()=>{setIsTrue(!isTrue)}}></i>
    </header>
  )
}

export default Header