import  { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    // D3.js code to create the chart

    const svg = d3.select(svgRef.current);
    const width = 400;
    const height = 200;
    const barWidth = 2

    // Create scales and data binding
    const xScale = d3.scaleBand().domain(data.map((d, i) => i)).range([0, width]).padding(0.1);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth(barWidth))
      .attr('height', d => height - yScale(d))
      .attr('fill', '#47B747');
  }, [data]);

  return (
    <div className="chart">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default BarChart;
