import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend } from "chart.js";
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend);

export const LineChart = ({xdata, ydata, heading}) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: heading
            }
        }
    }

    const data = {
        labels: xdata,
        datasets: [
            {
                label: heading,
                data: ydata,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                tension: 0.5
            },
        ],
    };

    return (
        <Line options={options} data={data} />
    )
}


// function getLastYearMonths() {
//     const labels = [];
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//     const currentMonth = new Date().getMonth();
//     let remain = 11 - currentMonth;

//     for (let i = currentMonth; i < months.length; i--) {
//         const element = months[i];
//         labels.unshift(element);

//         if (i === 0) break;
//     }

//     for (let index = 11; index > remain; index--) {
//         if (index === currentMonth) break;
//         const element = months[index];
//         labels.unshift(element);
//     }
//     return labels;
// }