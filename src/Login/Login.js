import React, { useState } from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
               if (auth) {
                navigate('/')
               }
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
               if (auth) {
                navigate('/')
               }
            })
            .catch(error => alert(error.message))

    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
          alt="Amazon"
        />
      </Link>
      <div className="login_container">
     
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
 
          <button type="submit" onClick={signIn} className="login_signInButton">Sign in</button>
        </form>
        <p>
          By Signing in your are agree to AMAZON FAKE CLONE Terms and Conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interst-Base Ads Notice
        </p>
        <button onClick={register} className="login_registerButton">
            Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
