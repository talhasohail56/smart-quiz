import CanvasJSReact from '@canvasjs/react-charts';
import React from 'react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = () => {
  const addSymbols = (e) => {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
    if (order > suffixes.length - 1)
      order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Most Scored Marks"
    },
    axisX: {
      title: "Top Teacher",
      reversed: true,
    },
    axisY: {
      title: "Marks",
      includeZero: true,
      labelFormatter: addSymbols
    },
    data: [{
      type: "bar",
      dataPoints: [
        { y: 91, label: "Waiz" },
        { y: 41, label: "Mughira" },
        { y: 61, label: "Talha" },
        { y: 11, label: "Anas" },
        { y: 21, label: "Weibo" },
        { y: 51, label: "Twitter" }
        
      ]
    }]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default BarChart;
