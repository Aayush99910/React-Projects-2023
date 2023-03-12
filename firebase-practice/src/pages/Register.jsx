import React, { useState } from "react";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged,   
} from "firebase/auth";
import {
  collection, addDoc
} from "firebase/firestore";
import { database } from "../firebaseConfig";
import { Link } from "react-router-dom";


const Register = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const collectionRef = collection(database, 'users'); // collectionRef 

  // using State to store the form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  // this function updates the formdata whenever the user changes their data
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => {
      return (
        {
          ...prevFormData,
          [name]: value
        }
      )
    })
  }

  // checks if the provided two passwords match each other
  const checkPassword = () => {
    if (formData.password == formData.confirmpassword) {
      return true;
    } else {
      return false;
    }
  }

  // adds the user to the database
  const addData = () => {
    addDoc(collectionRef, {
      ...formData
    })
    .then()
    .catch(error => {
      alert(error.message)
    })
  }

  //this function handles the submitted data from the user
  const handleSubmit = (e) => {
    e.preventDefault();
    let passwordMatches = checkPassword();

    // returns if the user's both password don't match
    if (!passwordMatches) {
      alert("Passwords don't match!!");
      return;
    }

    // creates user with email and password
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then(() => {
      alert("Successfully registered. Please login to access the homepage.")
    })
    .catch(error => {
      alert(error.message)
    })

    addData(); // adds the user's data to the database

    // setting the values back to empty string after the user has submitted the data
    setFormData({ username: "", email: "", password: "", confirmpassword: "" })
  }

  return (
    <div className="form-big-container">
      <div className="form-container">
        <div className="title">
          <h1>Register</h1>
        </div>
        <div className="chatapp-text">
          <h3>Chat app</h3>
          <p>Join the chat app and have fun socializing with people</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input 
            onChange={handleInput}
            placeholder="Your Username" 
            type="text" 
            name="username" 
            autoCorrect="off" 
            autoComplete="off"  
            value={formData.username}
            required/>
          <input
            onChange={handleInput} 
            placeholder="Your Email" 
            type="email" 
            name="email" 
            autoCorrect="off" 
            autoComplete="off" 
            value={formData.email}
            required/>
          <input 
            onChange={handleInput}
            placeholder="Password" 
            type="password" 
            name="password" 
            autoCorrect="off" 
            autoComplete="off" 
            value={formData.password}
            required/> 
          <input 
            onChange={handleInput}
            placeholder="Confirm password" 
            type="password" 
            name="confirmpassword" 
            autoCorrect="off" 
            autoComplete="off" 
            value={formData.confirmpassword}
            required/> 
          <button className="button" type="submit">Sign up</button>
        </form>
        <div className="link-container">
          <p>Already a user? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register;