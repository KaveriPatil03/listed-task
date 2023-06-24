import React, { useState } from 'react'
import { useEffect } from 'react'
import './signup.css'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


// const clientId = "509748131320-4g40oonnoe2pn5qahr6taj3ajl4h8arq.apps.googleusercontent.com";
const initialState = {
    name: "",
    mobile: "",
    email: "",
    password: ""
}
const SignUp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // setData([...data, formData]);
        localStorage.setItem("form", JSON.stringify(formData));

        setFormData({
            name:"",
            mobile:"",
            email:"",
            password:""
        })
        alert("Registered Successfully... You can now login")
        // navigate("/")
    }
    console.log(data);
    // const navigate = useNavigate()

    // const onSuccess = (res) => {

    //     console.log("LOGIN SUCCESS Current user: ", + res.profileObj);
    //     navigate("/dashboard")
    // }
    // const onFailure = (res) => {
    //     console.log("LOGIN FAILED res: ", res);
    // }

    return (
        <>
            {/* <div id="signInButton">
        <GoogleLogin 
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div> */}
            <div>
                <section id="signUp">
                    <div className="outer-container signup-outer-container">
                        <div className='left-container'>
                            <div>
                                <h1>Board</h1>
                            </div>
                        </div>
                        <div className='signup-right-container'>
                            <div className='signup'>
                                <form>
                                    <div>
                                        <div className="signup-heading">
                                            <h1>Sign Up</h1>
                                            <p>Create your account</p>
                                        </div>
                                        {/* <div className='signin-acc'>
                                    <p><a href='#'>Sign in with Google</a></p>
                                    <p><a href='#'>Sign in with Apple</a></p>
                                </div> */}
                                        <div className="signup-form">
                                            <form>
                                                <label htmlFor="name">Name</label><br />
                                                <input type="text"
                                                    name='name'
                                                    className="input-box"
                                                    placeholder='Name'
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                                <br />

                                                <label htmlFor="name">Mobile</label><br />
                                                <input type="number"
                                                    name='mobile'
                                                    className="input-box"
                                                    placeholder='Mobile Number'
                                                    value={formData.mobile}
                                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
                                                <br />

                                                <label htmlFor="email">Email Address</label><br />
                                                <input type="email"
                                                    name='email'
                                                    className="input-box"
                                                    placeholder='Email'
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                                <br />

                                                <label htmlFor="password">Password</label><br />
                                                <input type="password"
                                                    name='password'
                                                    className="input-box"
                                                    placeholder='Password'
                                                    value={formData.password}
                                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                                {/* <p><a href="#">Forgot Password?</a></p> */}
                                                <button 
                                                className="signup-btn"
                                                onClick={handleSubmit}>Sign Up</button><br />
                                                <p className='signup-reg'>
                                                    Already have an account?
                                                    <Link to="/">Login here</Link>
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

export default SignUp