import CanvasJSReact from '@canvasjs/react-charts';
import { MDBCard } from 'mdb-react-ui-kit';
import React from 'react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
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
    backgroundColor: "transparent",
    creditText: "", // Remove CanvasJS.com watermark
    
    title: {
      text: "Most Scored Marks",
      fontColor: "#333",
      fontSize: 20,
      fontWeight: "bold",
    },
    axisX: {
      title: "Top Teacher",
      reversed: true,
      labelFontColor: "#333",
    },
    axisY: {
      title: "Marks",
      includeZero: true,
      labelFormatter: addSymbols,
      labelFontColor: "#333",
    },
    data: [{
      type: "bar",
      dataPoints: [
        { y: 91, label: "Waiz", color: "#5072A7" },
        { y: 41, label: "Mughira", color: "#509EA7" },
        { y: 61, label: "Talha", color: "#50A77C" },
        { y: 11, label: "Anas", color: "#A78B50" },
        { y: 21, label: "Weibo", color: "#A7508F" },
        { y: 51, label: "Twitter", color: "#D27C54" },
      ]
    }]
  };

  return (
    <MDBCard style={{ margin: '4rem 1rem', backgroundColor: "#f9f9f9", borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <CanvasJSChart options={options} />
    </MDBCard>
  );
};

export default Chart;
