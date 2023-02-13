import { useEffect } from "react";
import HomeHeader from "./Home-header";
import HomeMain from "./Home-main";
import Footer from "../Footer/Footer";
import './Home.css';
import "../Sharedlayout/Sharedlayout.css";

export default function Home(props) {
  return (
    <>
      <div className="home-big-container">
        <HomeHeader />
        <HomeMain addItems={props.addItems} />
      </div>
      <Footer />
    </>
  )
}