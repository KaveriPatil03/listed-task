import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';


const clientId = "509748131320-4g40oonnoe2pn5qahr6taj3ajl4h8arq.apps.googleusercontent.com";

const Logout = () => {
    const navigate = useNavigate();

    const onSuccess = () => {
        console.log("Log out successful")
        navigate("/")
    }
  return (
    <>
        <div id="signOutButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    </>
  )
}

export default Logout