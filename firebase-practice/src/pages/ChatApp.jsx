import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { database } from "../firebaseConfig";
import { collection, addDoc, onSnapshot, query, where, orderBy, limit } from "firebase/firestore";
import { serverTimestamp } from 'firebase/firestore';
import 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const ChatApp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({
    userID: "",
    userName: "",
    userEmail: "",
    message: "",
    profilePicURL: ""
  });

  // handles the changes of the input 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      return (
        {
          ...prevState,
          [ name ]: value
        }
      )
    })
  }

  // gets the data to check if it exists in the database or not
  const getDataByQuery = (query) => {
    return new Promise((resolve, reject) => {
      onSnapshot(query, (data) => {
        const array = data.docs.map(item => item.data());
        resolve(array);
      }, error => {
        reject(error);
      });
    });
  }

  // writes the user's message to the database
  const addData = () => {
    const collectionRefMessage = collection(database, 'messages');
    addDoc(collectionRefMessage, {
      userID: formData.userID,
      userName: formData.userName,
      userEmail: formData.userEmail,
      profilePicURL: formData.profilePicURL,
      message: formData.message,
      timeStamp: serverTimestamp()
    })
  }

  // handles the user's submitted data
  const handleSubmit = (e) => {
    e.preventDefault();
    addData();

    setFormData(prevState => {
      return ({
        ...prevState,
        message: "",
      })
    })
  }

  // reads the data from the server
  const getDataFromTheServer = () => {
    const collectionRefMessage = collection(database, 'messages');
    const queryRef = query(collectionRefMessage, orderBy("timeStamp"), limit(100));
    onSnapshot(queryRef, (messagesResponse) => {
      setMessages(messagesResponse.docs.map(message => message.data()));
    });
  }
  
  // getting the user's detail
  useEffect(() => {
    const getUserDetails = (user) => {
      const userEmail = user.email
      setFormData(prevState => ({
        ...prevState,
        userID: user.uid,
        userEmail: userEmail,
      }));
  
      const collectionRefUers = collection(database, 'users');
      const requestedQuery = query(collectionRefUers, where("email", "==", userEmail))
  
      getDataByQuery(requestedQuery)
      .then((response) => {
        setFormData(prevState => ({
          ...prevState,
          userName: response[0].username,
          profilePicURL: response[0].profilePicURL
        }))
      });
    }
  
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserDetails(user);
      } else {
        setFormData((prevState) => ({
          ...prevState,
          userID: "",
          userEmail: "",
          userName: "",
          profilePicURL: "",
        }));
      }
    });
  
    getDataFromTheServer();
    return () => {
      unsubscribeAuth();
    };
  }, []);

  // handles the sign out 
  const handleLogout = () => {
    signOut(auth).then(() => {
      setFormData(prevState => ({
        ...prevState,
        userID: "",
        userEmail: "",
        userName: "",
        profilePicURL: ""
      }));
    }).catch((error) => {
      console.error(error);
    });
  
    navigate("/");
  }


  return (
    <div className="main-chatapp-container">
      <nav className="main-chatapp-nav">
        <h1>Group Friendly Chat</h1>
        <button onClick={handleLogout} className="log-out-button">Log Out</button>
      </nav>
      <main className="chatapp">
        <div className="chatapp-message-container"> 
          {
            messages.map((msg, index) => {
              return (
                <div className="each-message" key={index}>
                  <div className="user-profilePic">
                    <img src={msg.profilePicURL}/>
                  </div>
                  <div className="user-details">
                    <p className="username">{msg.userName}</p>
                    <p className="user-message">{msg.message}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="message-form-container">
          <form className="message-form" onSubmit={handleSubmit}>
            <input  
              onChange={handleInput}
              placeholder="Type your message here..." 
              type="text" 
              name="message" 
              autoCorrect="off" 
              autoComplete="off"
              value={formData.message}
              required
            />
            <button className="send-button"><AiOutlineSend /></button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default ChatApp;