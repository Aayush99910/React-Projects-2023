import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/offers">Offers</Link>
      <Link to="/carts">Carts</Link>
    </nav>
  )
}
