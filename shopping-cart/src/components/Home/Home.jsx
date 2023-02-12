import { useEffect } from "react";
import HomeHeader from "./Home-header";
import HomeMain from "./Home-main";
import Footer from "../Footer/Footer";
import './Home.css';

export default function Home() {
  return (
    <div className="home-big-container">
      <HomeHeader />
      <HomeMain />
      <Footer />
    </div>
  )
}