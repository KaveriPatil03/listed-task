import React from 'react'
// import { Line } from "react-chartjs-2";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement} from "chart.js";


ChartJs.register(
    LineElement,
    CategoryScale, 
    LinearScale, 
    PointElement
)
const LineGraph = () => {

    // const data = {
    //     labels: ["mon","tue","wed"],
    //     datasets: [{
    //         labels: "Sales of the week",
    //         data: [3,6,9],
    //         backgroundColor: "aqua",
    //         borderColor: "black",
    //         pointBorderColor: "aqua"
    //     }]
    // }
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
      const options = {
        plugins: {
            legend: {
                display: true,
                responsive: true,
                // position: 'right',
                // labels: {
                //     color: 'rgb(255, 99, 132)',

                // }
            }
        }
        // scales: {
        //     y:{
        //         min: 3,
        //         max: 6
        //     }
        // }
      }
  return (
    <>
    <div className='outer-line-chart'>
       <div className="inner-line-chart">
       <div className='line-chart-title'>
            <p><h3>Activities</h3></p>
            <select name="" id="">
                <option value="May - June 2021">May - June 2021</option>
                <option value="May - June 2021">May - June 2021</option>
                <option value="May - June 2021">May - June 2021</option>
                <option value="May - June 2021">May - June 2021</option>
            </select>
        </div>
        
        <div className='line-chart'>
            <Line
                data={data}
                options={options}
            ></Line>
        </div>
       </div>
    </div>
    </>
  )
}

export default LineGraph