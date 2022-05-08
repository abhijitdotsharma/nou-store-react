import "./navigation-top.css";
import { Link } from "react-router-dom";
export default function NavigationTop(){
    return(
    <nav className="navbar">
        <Link className="nav-heading" to="/">NOU Store</Link>
        <input className="nav-input" type="text" placeholder="Search from a range of merch" />
        <div className="nav-right">
          <a className="nav-btn" href="./files/login.html">Login</a>
          <a href="./files/wishlist.html">
            <i className="fal fa-heart wishlist"></i>
          </a>
          <a href="./files/cart.html">
            <i className="fal fa-shopping-cart cart">Cart
            </i>
          </a>
        </div>
    </nav>
    )
}