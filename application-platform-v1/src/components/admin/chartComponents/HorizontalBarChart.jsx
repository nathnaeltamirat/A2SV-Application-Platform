import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: '',
                data: data.values,
                backgroundColor: 'rgba(79, 70, 229, 0.6)',
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default HorizontalBarChart;