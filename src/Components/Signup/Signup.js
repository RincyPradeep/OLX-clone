import React, { useState, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup({favorite}) {
  const history = useHistory();
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')

  const {firebase}=useContext(FirebaseContext)

  const handleSubmit =(e)=>{
    e.preventDefault();
    
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone,
          favstatus:favorite
        }).then(()=>{
          history.push('/login');
        })
      })
    })   
}

  return (
    <div className="signup">
      <div className="signupParentDiv">
        <img width="200px" height="200px" src="./Images/olx-logo.png" />

        <form onSubmit={handleSubmit}>
          <label htmlFor="uname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="uname"
            name="name"
            required
          />
          <br /> 
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            required
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="text"
            id="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
