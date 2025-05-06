import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// 🔸 Custom Plugin: Draw text in center
const centerTextPlugin = {
  id: 'centerTextPlugin',
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    ctx.restore();

    const fontSize = (height / 114).toFixed(2);
    ctx.font = `20px sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#4F4C7A'; // color of text

    const text = '55%'; // Change this to dynamic if needed
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

const chartData = {
  labels: ['5패', '6승'],
  datasets: [
    {
      data: [5/11, 6/11],
      backgroundColor: ['#B6B659', '#3F649B'],
      borderWidth: 0,
    }
  ]
};

const chartOptions = {
  cutout: '70%', // Makes the center empty
  plugins: {
    legend: { display: false },
  }
};

// ✅ Functional Component with export default
const Graph = () => {
  return (
    <div style={{ width: '200px' }}>
      <Doughnut
        data={chartData}
        options={chartOptions}
        plugins={[centerTextPlugin]}
      />
    </div>
  );
};

export default Graph;
