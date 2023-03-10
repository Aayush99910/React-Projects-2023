import { Link } from "react-router-dom";
import "./NotFound.css"

export default function NotFound() {
  return (
    <div className="error-page-container">
      <div>
        <h1>Oops! You seem to be lost.</h1>
        <p>Here are some helpful links:</p>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/about'>About Page</Link></li>
        </ul>
      </div>
    </div>
  )
}