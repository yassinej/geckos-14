import React, { Component } from 'react';
import * as d3 from 'd3';

const parseTime = d3.timeParse('%Y');

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          date: parseTime('2013'),
          value: 121
        },
        {
          date: parseTime('2014'),
          value: 111
        },
        {
          date: parseTime('2015'),
          value: 91
        },
        {
          date: parseTime('2016'),
          value: 111
        },
        {
          date: parseTime('2017'),
          value: 150
        }
      ]
    };
  }

  componentDidMount() {
    const width = 350,
      height = 250;

    const chart = d3
      .select(this.chartRef)
      .attr('width', width + 100)
      .attr('height', height + 200) // 200 for legend
      .append('g')
      .attr('transform', 'translate(100, 0)');

    const x = d3
      .scaleTime()
      .domain([new Date(2013, 0, 1), new Date(2017, 0, 1)]) // min max dates
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, 250]) // max value
      .range([height, 0]);

    const graph = chart
      .selectAll('.graph')
      .data(this.state.data)
      .enter()
      .append('g')
      .attr('class', 'graph');

    graph
      .append('path')
      .attr('class', 'line')
      .style('stroke', 'red')
      .attr('d', parentData => {
        return d3
          .line(parentData.values)
          .curve(d3.curveBasis) // make points round, not sharp
          .x(d => x(d.date))
          .y(d => y(d.value));
      });

    chart
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${y(0) - 20})`)
      .call(d3.axisBottom(x));

    chart
      .append('g')
      .attr('class', 'axis axis--y')
      .attr('transform', 'translate(0,0)')
      .call(d3.axisLeft(y));
  }
  render() {
    return <svg className="line-chart--base" ref={r => (this.chartRef = r)} />;
  }
}
