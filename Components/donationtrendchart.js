import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonationTrendChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current)
      .attr('width', 600)
      .attr('height', 400);

    // Example D3 code for creating a line chart
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)))
      .range([0, 600]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.donations)])
      .range([400, 0]);

    const line = d3.line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.donations));

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('d', line);
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default DonationTrendChart;
