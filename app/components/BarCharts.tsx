'use client'

import 'chart.js/auto';
import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import React, { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const BarCharts = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [data, setData] = useState({
        labels: labels,
        datasets: [{
          label: 'Expenses by Month',
          data: [ 1, 2, 4, 8, 16, 31, 64, 84, 98, 120, 140, 160],
          backgroundColor: [
            'rgb(153, 102, 255)'
          ],
          borderColor: [
            'rgb(153, 102, 255)'
          ],
          borderWidth: 1
        }]
    });

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setData({
            ...data,
            datasets: [{
                ...data.datasets[0],
                data: [65, 59, 80, 81, 56, 55, 40, 64, 84, 98, 120, 140]
            }]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Monthly Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
    return (
        <div>
            <div className="w-full md:col-span-3 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Bar data={data} options={chartOptions}/>
            </div>
        </div>
    )
}

export default BarCharts