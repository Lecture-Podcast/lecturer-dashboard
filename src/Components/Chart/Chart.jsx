import React from 'react';
import './Chart.css'
import Chart from "react-apexcharts"
import { useRef } from 'react';


const Graph = () => {
    const chartRef = useRef(null);
    
    const initialBackgroundColor = 'rgba(52, 202, 165, 0.10)';
    const chartData = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', "12"],
        data: [{
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
    const data = {
        series: [
          {
            name: "Documents",
            data: [200, 300, 400, 350, 500, 600, 550, 400, 500, 700, 750, 850],
          },
          {
            name: "Videos/Live sessoins",
            data: [250, 200, 300, 450, 200, 500, 550, 450, 550, 400, 750, 850],
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            dropShadow: {
              enabled: true,
              color: "#000",
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2,
            },
            toolbar: {
              show: false,
            },
          },
          colors: ["#F56630", "#1671D9"],
          stroke: {
            curve: "smooth",
          },
          grid: {
            borderColor: "#e7e7e7",
            strokeDashArray: 7,
            row: {
              opacity: 0.5,
            },
          },
          // markers: {
          //   size: 1,
          // },
          xaxis: {
            categories:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', "12"],
            labels: {
              style: {
                fontFamily: "Inter", // Change the font family as needed
                fontSize: "12",
                color:"#475367",
                fontWeight: "400"
              },
            },
          },
          yaxis: {
            tickAmount: 5,
            min: 0,
            max: 1000,
            labels: {
              style: {
                fontFamily: "Inter", // Change the font family as needed
                fontSize: "12",
                color:"#475367",
                fontWeight: "400"
              },
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            floating: true,
            offsetY: -25,
            offsetX: -5,
          },
        },
      };
    return ( 
        <div className="chart" style={{height: "250px"}}>
            <Chart series={data.series} options={data.options} type="line" height={250}/>
            {/* <Line data={chartData} options={options}/> */}
        </div>
    );
}
 
export default Graph;