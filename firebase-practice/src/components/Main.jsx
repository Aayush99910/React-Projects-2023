import React from "react";
import chatappThumbnail from "../assets/chatappThumbnail.png";

const Main = () => {
  return (
    <main className="main-container">
      <div className="left-container">
        <h2>
          Connect with Chatapp
        </h2>
        <p>A simple chatapp built with the help of React and firebase.</p>
        <button className="get-started-button">Get Started</button>
      </div>
      <div className="right-container">
        <img src={chatappThumbnail}/>
      </div>
    </main>
  )
}

export default Main;