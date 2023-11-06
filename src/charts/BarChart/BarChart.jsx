import { useRef, useEffect } from "react";
import * as d3 from "d3";

function BarChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const newWidth = 600;
    const newHeight = 150;
    const barWidth = 10;

    svg.attr("width", newWidth).attr("height", newHeight);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, newWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([newHeight, 0]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i))
      .attr("y", (d) => yScale(d))
      .attr("width", barWidth)
      .attr("height", (d) => newHeight - yScale(d))
      .attr("fill", "#47B747");
  }, [data]);

  return (
    <div className="chart p-4">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default BarChart;
