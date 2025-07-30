import React, { useContext, useState } from 'react'
import "./Navber.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navber = ({setShowLogin}) => {

  const [menue,setMenue] = useState("home");
 const {getTotalCartAmount,cartItems} = useContext(StoreContext);

 console.log(cartItems);
 
  return (

    
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menue">
        <Link to='/' onClick={()=>setMenue("home")} className={menue === 'home'?'active':''}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenue("menue")} className={menue === 'menue'?'active':''}>Menue</a>
        <a href='#app-download' onClick={()=>setMenue("mobile-app")} className={menue === 'mobile-app'?'active':''}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenue("contact-us")} className={menue === 'contact-us'?'active':''}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
          <Link to='/Cart'><img src={assets.cart} className='cart' alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navber