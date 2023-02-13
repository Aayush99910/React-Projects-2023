import Footer from "../Footer/Footer";
import AboutHeading from "./About-heading";
import AboutMain from "./About-main";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-big-container">
        <AboutHeading />
        <AboutMain />
      </div>
      <Footer />
    </>
  )
}