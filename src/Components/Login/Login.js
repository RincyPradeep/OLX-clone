import React, { useState, useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import './Login.css';
import {Link, useHistory} from 'react-router-dom';

function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history=useHistory();

  const handleLogin = (e) =>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    })
    .catch((error)=>{
        alert(error.message)
    })
  }

  return (
    <div>
      <div className="login-parent-div">
        <img width="200px" height="200px" src="./Images/olx-logo.png" alt="logo"></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
