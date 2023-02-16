import { NavLink } from "react-router-dom";
import CoverImg from "../../assets/iphone.png";

export default function HomeHeader() {
  return (
      <header className="home-header-container">
        <div className="home-title-container">
          <h1>Buy the brand new Iphone 14 Pro Max.</h1>
          <p>You can save up to 40%. Enjoy our offers.</p>
          <button className="home-buy-button">Buy now</button>
        </div>
        <div className="home-image-container">
          <img src={CoverImg} />
        </div>
      </header>
  )
}