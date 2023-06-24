import React from 'react'
import { Link } from 'react-router-dom'
import './css/dashboard.css'
import SideBar from './SideBar'
import LineGraph from './charts/LineGraph';
import PieChart from './charts/PieChart';





const Dashboard = () => {

   
    return (
        <>
            <div >
                <SideBar />
                {/* <Navbar /> */}

                {/* start */}
                <div className='dash-details'>
                    <div className='dash-box1'>
                        <div className='dash-box'>
                            <div className='dash-icon'><i class="fa-solid fa-camera"></i></div>
                            <p>Total Revenues</p>
                            <h4>$2,129,430</h4>
                        </div>
                    </div>
                    <div className='dash-box2'>
                        <div className="dash-box">
                            <div className='dash-icon'>
                                <i class="fa-solid fa-tag"></i>
                            </div>
                            <p>Transactions</p>
                            <h4>1520</h4>
                        </div>
                    </div>
                    <div className='dash-box3'>
                        <div className="dash-box">
                            <div className='dash-icon'>
                                <i class="fa-solid fa-thumbs-up"></i>
                            </div>
                            <p>Total Likes</p>
                            <h4>9,721</h4>
                        </div>
                    </div>
                    <div className='dash-box4'>
                        <div className="dash-box">
                            <div className='dash-icon'>
                                <i class="fa-solid fa-users"></i>
                            </div>
                            <p>Total Users</p>
                            <h4>892</h4>
                        </div>
                    </div>
                </div>
                {/* end */}

                {/* Line Graph Start */}
                <LineGraph />
                {/* Line Graph End */}

                {/* chart start */}
                <PieChart />
                {/* chart end */}



            </div>
        </>
    )
}

export default Dashboard