import "./navigation-top.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useState } from "react";

export default function NavigationTop() {

  const [sidebarOn, setSidebarOn] = useState(false);

  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const {cart} = useCart();

  function logoutHandler() {
    // clean local storage
    localStorage.clear();
    // navigate to homepage
    navigate("/")
    setIsLoggedIn(prev => prev = false)
  }

  return (
    <nav className="navbar">
      <Link className="nav-heading" to="/">NOU Store</Link>
      <div className={sidebarOn? `nav-items active`: `nav-items`}>
        <input className="nav-input" type="text" placeholder="Search from a range of merch" />
        <div className="nav-right">
          {isLoggedIn ?
            <button
              className="nav-btn logout"
              onClick={logoutHandler}
            >Logout
            </button> :
            <Link
              to="/login"
              className="nav-btn"
            >Login
            </Link>}

          <Link to="/wishlist">
            <i className="fal fa-heart wishlist"></i>
          </Link>
          <Link to='/cart' className="cart-badge">
            <i className="fal fa-shopping-cart cart">
            </i>
            <span class="badge-notification">{cart.cartCount}</span>
          </Link>
        </div>
      </div>
      <div 
      className="ham-btn"
      onClick={() => setSidebarOn(prev => !prev)}
      ><i class="fal fa-bars"></i></div>
    </nav>
  )
}