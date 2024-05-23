import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import {login,signup} from '../../firebase.js'
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {
  
  const [signState, setSignState] = useState("Sign In");
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);

  const user_auth = async (e)=>{
    setLoading(true);
    e.preventDefault();
    if (signState === "Sign In") {
      await login(email,password);
    } else {
      await signup(name,email,password);
    }
    setLoading(false);
  }

  const handelClick = () => {
    setLoading(true);
    if (signState === "Sign In") {
      setSignState("Sign Up");
    } else {
      setSignState("Sign In");
    }
    setLoading(false);
  };
  return (
    loading ? (<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div> ): (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>

        <form method="post">
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your Name"  value={name} onChange={(e)=>{ setName(e.target.value)}}/>
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <button onClick={user_auth} type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={handelClick}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already hava an account?{" "}
              <span onClick={handelClick}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>)
  );
};
export default Login;
