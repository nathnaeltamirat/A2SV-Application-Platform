import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js';
import {Chart, ArcElement} from 'chart.js'


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: '',
                data: data.values,
                backgroundColor:  ['rgb(165, 180, 252)',
                    'rgb(129, 140, 248)',
                    'rgb(79, 70, 229)']
                    ,
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            responsive: true,
            cutout: '80%', 
            legend: {
                display: true,
                position: 'bottom',
            },
           
        },
    };

    return <Doughnut data={chartData} options={options} />;
};

export default PieChart;