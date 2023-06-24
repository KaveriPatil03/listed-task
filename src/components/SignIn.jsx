import React, { useState } from 'react'
import { useEffect } from 'react'
import './signin/signin.css'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginBtn from './signin/LoginBtn';


const clientId = "509748131320-4g40oonnoe2pn5qahr6taj3ajl4h8arq.apps.googleusercontent.com";

const initialState = {
    email:"",
    password:""
}
const SignIn = () => {

    const [formData, setFormData] = useState(initialState);

    const navigate1 = useNavigate()
    
   

    const handleSubmit = (e) => {
        e.preventDefault();

        const loggedUser = JSON.parse(localStorage.getItem("form"));
        if(formData.email === loggedUser.email && formData.password === loggedUser.password){
            navigate1("/dashboard")
        }else{
            alert("Invalid email and password");
        }
    }
  return (
    <>
    
    <div>
        <section id="signIn">
            <div className="outer-container">
                <div className='left-container'>
                    <div>
                        <h1>Board</h1>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='signin'>
                        <form>
                            <div>
                                <div className="signin-heading">
                                    <h1>Sign In</h1>
                                    <p>Signin to your account</p>
                                </div>
                                <div className='signin-acc'>
                                <LoginBtn />
                                <p><a href='#'>Sign in with Apple</a></p>
                                    {/* <p><a href='#'>Sign in with Google</a></p> */}
                                    {/* <p><a href='#'></a></p>
                                    <p><a href='#'>Sign in with Apple</a></p> */}
                                </div>
                                <div className="signin-form">
                                    <form>
                                        <label htmlFor="email">Email Address</label><br/>
                                        <input type="text"
                                         name='email' 
                                         className="input-box" 
                                         placeholder='Email'
                                         value={formData.email}
                                         onChange={(e) => setFormData({...formData, email:e.target.value})}/>
                                         <br/>

                                        <label htmlFor="password">Password</label><br/>
                                        <input type="password" 
                                        name='password' 
                                        className="input-box" 
                                        placeholder='Password'
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password:e.target.value})}/>
                                        <p><a href="#">Forgot Password?</a></p>
                                        <button className="signup-btn" onClick={handleSubmit}>Sign In</button><br/>
                                        <p className='signin-reg'>
                                            Don't have account?
                                            <Link to="/register">Register here</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default SignIn