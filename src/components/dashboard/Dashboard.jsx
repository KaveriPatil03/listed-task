import React from 'react'
import { Link } from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './css/dashboard.css'
import SideBar from './SideBar'
import LineGraph from './charts/LineGraph';
import Logout from '../Logout';
import Navbar from '../Navbar';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);




const Dashboard = () => {

    const data = {
        labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
        datasets: [
            {
                data: [31, 14, 55],
                backgroundColor: ['rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(135, 173, 150)']
            }
        ],
        

    };

    // const options = {

    //     legend: { display: true, position: "right" },

    //       datalabels: {
    //         display: true,
    //         color: "white",
    //       },
    //       tooltips: {
    //         backgroundColor: "#5a6e7f",
    //       },
    // }
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
                <div className='top-products'>

                    <div className='pie-chart'>
                        <div className="chart-heading">
                            <h3>Top Products</h3>
                            <select name="" id="">
                                <option value="">May - june2021</option>
                                <option value="">May - june2021</option>
                                <option value="">May - june2021</option>

                            </select>
                        </div>
                        <div style={{
                            padding: "20px",
                            width: "70%"
                        }} className='chart'>
                            <Pie
                                data={data}
                                options={{
                                    plugins: {
                                        legend: {
                                            display: true,
                                            position: 'right',
                                            // labels: {
                                            //     color: 'rgb(255, 99, 132)',

                                            // }
                                        },
                                        responsive: true
                                    }
                                }}
                            ></Pie>
                        </div>
                    </div>
                    <div className='todays-schedule'>
                        <div className="schedule-title">
                            <h3>Today's Schedule</h3>
                            <p>
                                <Link>See All </Link>
                            </p>
                        </div>
                        <div className="schedule-content">
                            <div className='first-schedule'>
                                <b className='fs-title'>Meeting with suppliers from Kuta Bali</b>
                                <p>14.00 - 15.00</p>
                                <p>at Sunset Roda, Kuta, Bali</p>
                            </div>
                            <div className='second-schedule'>
                                <b className='fs-title'>Check operation at Giga Factory 1</b>
                                <p>18.00 - 20.00</p>
                                <p>at SCentral Jakarta</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* chart end */}



            </div>
        </>
    )
}

export default Dashboard