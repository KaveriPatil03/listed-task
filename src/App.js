import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Transactions from './components/dashboard/Transactions';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import SignIn from './components/signin/pages/SignIn';
import SignUp from './components/signin/pages/SignUp';

const clientId = "509748131320-4g40oonnoe2pn5qahr6taj3ajl4h8arq.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  },[])
  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
      </Routes>
      </BrowserRouter> 
   </>
  );
}

export default App;
