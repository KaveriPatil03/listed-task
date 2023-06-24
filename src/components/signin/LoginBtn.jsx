import React from 'react'

import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const clientId = "509748131320-4g40oonnoe2pn5qahr6taj3ajl4h8arq.apps.googleusercontent.com";

const LoginBtn = () => {
    const navigate = useNavigate();
    const onSuccess = (res) => {
        
        console.log("LOGIN SUCCESS Current user: ", + res.profileObj);
        navigate("/dashboard")
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED res: ", res);
    }
  return (
    <>
        <div id="signInButton">
        <GoogleLogin 
            clientId={clientId}
            buttonText='Login with google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div>
    </>
  )
}

export default LoginBtn