import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

function WaveChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const width = 500; // Change the width to your desired value
  const height = 150; // Change the height to your desired value
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };

  useEffect(() => {
    // Fetch data only on the initial component mount
    const data = d3.range(0, 100, 0.1).map((x) => [x, Math.sin(x)]);
    setChartData(data);
  }, []);

  useEffect(() => {
    // D3 code for creating the wave chart  
    if (chartData.length === 0) {
      return; // Don't proceed if data is not available
    }

    const svg = d3.select(chartRef.current);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear().domain([0, 10]).range([0, innerWidth]);
    const yScale = d3.scaleLinear().domain([-1, 1]).range([innerHeight, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]));

    // You can add more styling, axes, and labels as needed

    svg.selectAll('*').remove(); // Clear the chart
    const chartGroup = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    chartGroup
      .append('path')
      .datum(chartData)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#47B747')
      .attr('stroke-width', 2);

  }, [chartData, width, height, margin]);
  return (
    <div className="wave-chart p-4">
      <svg ref={chartRef} width={width} height={height}></svg>
    </div>
  );
}

export default WaveChart;
