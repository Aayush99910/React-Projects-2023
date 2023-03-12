import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { database } from "../firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";


const Login = () => {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: ""
  });

  // gets the data to check if it exists in the database or not
  const getData = (query) => {
    return new Promise((resolve, reject) => {
      onSnapshot(query, (data) => {
        const array = data.docs.map(item => item.data());
        resolve(array);
      }, error => {
        reject(error);
      });
    });
  }

  // this function checks the users details in the database with the ones that is provided
  const verifyUserDetails = (array) => {
    if (array.length == 0) {
      return;
    }

    if (loginCredentials.password != array[0].password) {
      return false;
    } else {
      return true;  
    }
  }

  // this function handles the user's login credentials
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginCredentials(prevLoginCredentials => {
      return (
        {
          ...prevLoginCredentials,
          [name]: value
        }
      )
    })
  }

  // this function handles the submitted data from the user
  const handleSubmit = (e) => {
    e.preventDefault();
    const collectionRef = collection(database, 'users');
    const requestedQuery = query(collectionRef, where("email", "==", `${loginCredentials.email}`))
    
    getData(requestedQuery)
    .then((array) => {
      const isCorrectCredentials = verifyUserDetails(array);
      if (isCorrectCredentials) {
        navigate('/');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  return (
    <div className="form-big-container">
      <div className="form-container">
        <div className="title">
          <h1>Welcome back!</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            placeholder="Your Email" 
            type="email" 
            name="email" 
            autoCorrect="off" 
            autoComplete="off"
            value={loginCredentials.email} 
            required/>
          <input
            onChange={handleInput} 
            placeholder="Password" 
            type="password" 
            name="password" 
            autoCorrect="off" 
            autoComplete="off" 
            value={loginCredentials.password}
            required/>  
          <button className="button" type="submit">Log in</button>
        </form>
        <div className="link-container">
          <p>Not a user? <Link to="/register">Sign up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login;