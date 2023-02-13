import AboutCard from "./About-card.jsx";
import { aboutDatas } from "./about-data.js";

export default function AboutMain() {
  return (
    <div className="about-main-container">
        <div className="about-heading services">
          <h2>Our Services</h2>
        </div>
        <div className="about-cards-container">
          {
            aboutDatas.map(aboutData => {
              return (
                <AboutCard key={aboutData.id} data={aboutData} />
              )
            })
          }
        </div>
        <div className="about-heading staff">
          <h2>About our staff</h2>
        </div>
        <div className="about-staff-container">
          <div className="about-staff-text-container">
            <p>
              At our physical electronic store, our staff is the backbone of our business. We take pride in hiring knowledgeable, friendly, and customer-focused individuals who are passionate about technology and electronics. Our team is trained to provide expert advice and guidance to help you find the perfect product to meet your needs.
            </p>
            <br></br>
            <p>
            Whether you're a tech-savvy individual looking for the latest gadgets, or simply need help with a household appliance, our staff is here to assist you every step of the way. We believe in delivering an exceptional shopping experience, and our team is dedicated to providing you with the highest level of customer service.
            </p>
            <br></br>
            <p>
            Come visit us today and experience the difference that comes with shopping at our physical electronic store!
            </p>  
          </div>
          <div className="about-staff-image-container">
            <img src="https://www.pngmart.com/files/7/Guy-PNG-File.png" />
          </div>
        </div>
        <div className="about-heading thankyou">
          <p>Thank you for choosing our mobile store and we look forward to serving you soon!</p>
        </div>
    </div>
  )
}