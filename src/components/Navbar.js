import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import './dashboard/css/dashboard.css'
// import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <i className='fa fa-bars' style={{paddingTop:"10px", fontSize:"26px"}} 
                        onClick={showSidebar}></i>
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                {/* <AiIcons.AiOutlineClose /> */}
                <i className='fa fa-bars' style={{paddingTop:"10px", fontSize:"26px"}} 
                        ></i>
              </Link>
            </li>
            <div>
                    <ul>
                        <li>
                            <div className='inner-dashboard'>
                            <Link to="/dashboard">
                                <i className="fa-solid fa-gauge"></i>
                                   <b> Dashboard</b>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                            <Link to="/transactions">
                            <i className="fa-solid fa-tag"></i>
                               
                               <b> Transactions</b>
                                   
                                    </Link>
                              
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                            <Link>
                            <i className="fa-solid fa-calendar-days"></i>
                                
                                    <b>Schedules</b>
                                    </Link>
                                
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                            <Link>
                                <i className="fa-solid fa-users"></i>
                                
                                    <b>Users</b>
                                    
                                    </Link>
                               
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                            <Link>
                                <i className="fa-solid fa-gear"></i>
                                
                                    <b>Settings</b>
                                    </Link>
                                
                            </div>
                        </li> 
                        <br/><br/><br/><br/><br/><br/><br/>
                        <li>
                            <div className='inner-dashboard'>
                            <Link>
                                {/* <i className="fa-solid fa-gear"></i> */}
                               
                                   <b>Help</b>
                                   </Link>
                               
                            </div>
                        </li>
                        <li>
                            <div className='inner-dashboard'>
                                {/* <i className="fa-solid fa-gear"></i> */}
                                <Link>
                                    <b>Contact Us</b>
                                    </Link>
                                
                            </div>
                        </li>
                    

                    </ul>
                    </div>
            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    // {/* {item.icon} 
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
