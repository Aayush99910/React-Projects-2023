import React from "react";
import chatappThumbnail from "../assets/chatappThumbnail.png";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  //redirects the user to register page
  const redirectUser = () => {
    navigate("/register")
  }

  return (
    <main className="main-container">
      <div className="left-container">
        <h2>
          Connect with Chatapp
        </h2>
        <p>A chatapp built with the help of React and firebase.</p>
        <button onClick={redirectUser} className="get-started-button">Get Started</button>
      </div>
      <div className="right-container">
        <img src={chatappThumbnail}/>
      </div>
    </main>
  )
}

export default Main;