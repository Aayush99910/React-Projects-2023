import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/react.svg";
import cartLogo from "../../assets/shoppingCart.png"

export default function Navbar() {
  return (
    <nav className="navbar-nav">
      <NavLink to="/" className="nav-logo-container link">
        <h2>Fake Store</h2>
        <img src={Logo} />
      </NavLink>
      <div className="nav-links-container">
        <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : 'link'}>Home</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? 'nav-active' : 'link'}>Products</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active' : 'link'}>About</NavLink>
      </div>
      <div className="nav-search-cart-container">
        <input />
        <NavLink className="nav-logo-container" to="/carts">
          <img style={{height: '25px'}} src={cartLogo} />
        </NavLink>
      </div>
    </nav>
  )
}
