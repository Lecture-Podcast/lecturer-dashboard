import React from 'react';
import './Chart.css'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
}  from 'chart.js';
import Chart from 'chart.js/auto';
import { useRef } from 'react';


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const Graph = () => {
    const chartRef = useRef(null);
    
    const initialBackgroundColor = 'rgba(52, 202, 165, 0.10)';
    const chartData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', "12"],
        datasets: [{
            label:"Documents",
            data:[200, 300, 400, 350, 500, 600, 550, 400, 500, 700, 750, 850],
            borderColor: "#F56630",
            // fill:true,
            tension: 0.4,
        },
        {
            label:"Videos/Live sessoins",
            data:[250, 200, 300, 450, 200, 500, 550, 450, 550, 400, 750, 850],
            borderColor: "#1671D9",
            // fill:true,
            tension: 0.4,
        }
    ]
    };
    const options = {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 1000,
            ticks: {
                stepSize: 200,
                font: {
                    size: 12, // Set font size for x-axis labels
                    color: "#475367", // Set font color for x-axis labels
                    family:"Inter",
                    weight: 400
                },
            },
            grid: {
              // borderDash: [5], // Make the grid lines on the x-axis dotted
            },
          },
          x: {
            grid: {
                display: false, // Remove grid on the Y-axis
            },
            ticks:{
                font: {
                    size: 12, // Set font size for x-axis labels
                    color: "#475367", // Set font color for x-axis labels
                    family:"Inter",
                    weight: 400
                },
            }
          },
        },
        plugins: {
            legend: {
              display: true, // Remove legend
            },
          },
      };

    return ( 
        <div className="chart" style={{height: "250px"}}>
            <Line data={chartData} options={options}/>
        </div>
    );
}
 
export default Graph;