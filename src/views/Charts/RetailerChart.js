import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
function RetailerChart({ productsName, productsCount,colors }) { 
  const data = {
    labels: productsName,
    datasets: [
      {
        label: '# of Votes',
        data: productsCount,
        options: {
          responsive: true,
          display: true,
          maintainAspectRatio: true
        },
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      },
    ],
  };
  return <Doughnut data={data} />;
}

export default RetailerChart;