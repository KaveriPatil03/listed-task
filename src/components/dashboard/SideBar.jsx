import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/dashboard.css';
import Logout from '../signin/buttons/Logout';
const SideBar = () => {

    const [closeMenu, setCloseMenu] = useState(true);
    
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    }
  return (
    <>
     <div>
                <div className="outer-dashboard" style={{ width: closeMenu ? "160px" : "12px"}}>
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <h1 style={{ display: closeMenu ? "block" : "none"}}>Board</h1>
                        <i className='fa fa-bars' style={{paddingTop:"10px", fontSize:"26px"}} 
                        onClick={handleCloseMenu}></i>
                    </div>
                    <div >
                    <ul >
                        <li>
                            <div className='inner-dashboard'>
                            <Link to="/dashboard">
                                <b  style={{ marginRight: closeMenu ? "" : ""}}>
                                <i className="fa-solid fa-gauge"></i>
                                </b>
                                   <b style={{ display: closeMenu ? "" : "none"}}> Dashboard</b>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                            <Link to="/transactions">
                            <i className="fa-solid fa-tag"></i>
                               
                               <b style={{ display: closeMenu ? "" : "none"}}> Transactions</b>
                                   
                                    </Link>
                              
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                            <Link>
                            <i className="fa-solid fa-calendar-days"></i>
                                
                                    <b style={{ display: closeMenu ? "" : "none"}}>Schedules</b>
                                    </Link>
                                
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                            <Link>
                                <i className="fa-solid fa-users"></i>
                                
                                    <b style={{ display: closeMenu ? "" : "none"}}>Users</b>
                                    
                                    </Link>
                               
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                            <Link>
                                <i className="fa-solid fa-gear"></i>
                                
                                    <b style={{ display: closeMenu ? "" : "none"}}>Settings</b>
                                    </Link>
                                
                            </div>
                        </li> 
                        <br/><br/><br/><br/><br/><br/><br/>
                       <div className='help-contact'>
                       <li>
                            <div className='inner-dashboard'>
                            <Link>
                                {/* <i className="fa-solid fa-gear"></i> */}
                               
                                   <b style={{ display: closeMenu ? "" : "none"}}>Help</b>
                                   </Link>
                               
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                                {/* <i className="fa-solid fa-gear"></i> */}
                                <Link>
                                    <b style={{ display: closeMenu ? "" : "none"}}>Contact Us</b>
                                    </Link>
                                
                            </div>
                        </li>
                       </div>
                    

                    </ul>
                    </div>
                   

                </div>

               <div className="outer-top-bar">
               <div className='top-bar'>
                <div>
                    <h1>Dashboard</h1>
                    <Logout />
                </div>
                <div>
                    <ul>
                        <li>
                            <div className="search-bar">
                            <input type="search" placeholder='Search...' className='search-box'/>
                            <i className='fa fa-search'></i>
                            </div>
                        </li>
                        <li><i className="fa-solid fa-bell"></i></li>
                        {/* <li><i className="fa-solid fa-bell"></i></li> */}
                        <li>
                        <img src="https://images.pexels.com/photos/3585095/pexels-photo-3585095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </li>
                    </ul>

                </div>
            </div>
               </div>
            </div>
    </>
  )
}

export default SideBar