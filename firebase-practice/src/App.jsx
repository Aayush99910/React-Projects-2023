import React from "react";
import { app } from "./firebaseConfig";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;