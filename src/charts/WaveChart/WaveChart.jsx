import  { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

function WaveChart({ data, width, height }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(data);
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };

  useEffect(() => {
    if (data) {
      setChartData(data);
    }
  }, [data]);

  useEffect(() => {
    if (chartData.length === 0) {
      return; 
    }

    const svg = d3.select(chartRef.current);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear().domain([0, 10]).range([0, innerWidth]);
    const yScale = d3.scaleLinear().domain([-1, 1]).range([innerHeight, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]))
      .curve(d3.curveCardinal.tension(0.5)); 

    svg.selectAll('*').remove(); 
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
