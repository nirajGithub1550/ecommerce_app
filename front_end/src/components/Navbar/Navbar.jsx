import React, { useContext } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = React.useState('home');
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logOut = async()=>
    {
        localStorage.removeItem('token');
        setToken('');
        navigate('/');
    }
  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="logo" className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to="/"> <li className={menu==='home'?"active":""}  onClick={()=>setMenu("home")}>Home</li></Link>
            <li  className={menu==='menu'?"active":""} onClick={()=>setMenu("menu")}>Menu</li>
            <li className={menu==='mobile'?"active":""} onClick={()=>setMenu("mobile")}>Mobile-App</li>
            <li className={menu==='contact' ? "active":""} onClick={()=>setMenu("contact")}>Contact</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="search_icon" />
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt="basket-icon" /></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            {!token ?  <button onClick={()=>setShowLogin(true)}>Sign In</button> : 
            <div className="navbar-profile">
                <img src={assets.profile_icon} alt="profile_icon" />
                <ul className='nav-profile-dropdown'>
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="cart_icon" />Orders</li>
                    <hr />
                    <li onClick={logOut}><img src={assets.logout_icon} alt="logout_icon" />Logout</li>
                </ul>
            </div>
            }
           
        </div>
    </div>
  )
}

export default Navbar