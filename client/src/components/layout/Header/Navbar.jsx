import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {IoMdContact} from 'react-icons/io'
import {BsCart4} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import Badge from '@mui/material/Badge'
import {useSelector} from 'react-redux'
import logo from "../../../images/logo.png"
const Navbar = () => {
  const {cartItems} = useSelector((state)=>state.cart)
  // const {isAunthenticated}=useSelector((state)=>state.user)
  const { favouriteItems } = useSelector((state) => state.favourite);
  const navRef=useRef()
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <>
   <header>
    <Link to="/">
     <img src={logo} alt="img" style={{width:"130px",cursor:"pointer"}} />
    </Link>
     <nav ref={navRef}>
       <Link className='text' onClick={showNavbar} to="/">Home</Link>
       <Link className='text' onClick={showNavbar} to="/products">Products</Link>
       <Link className='text' onClick={showNavbar} to="/profile">profile</Link>
       <Link className='text' onClick={showNavbar} to="/contact">Contact</Link>
       <Link className='text' onClick={showNavbar} to="/about">About</Link>
       <button className='nav-btn nav-close-btn' onClick={showNavbar}>
         <FaTimes/>
       </button>
     <Link onClick={showNavbar} className='navSerch' to="/search"><FaSearch/></Link>
     <Link onClick={showNavbar} className='navHeart' to="/favourites">{ <Badge badgeContent={favouriteItems.length} color="secondary"><BsHeart/></Badge>}</Link>
     <Link onClick={showNavbar} className='navLogin' to="/login"><IoMdContact/></Link>
     <Link onClick={showNavbar} className='navCart' to="/cart">{ <Badge badgeContent={cartItems.length} color="secondary"><BsCart4/></Badge>}</Link>
     </nav>
     <button className='nav-btn' onClick={showNavbar}>
       <FaBars/>
     </button>
   </header>
    </>
  )
}

export default Navbar