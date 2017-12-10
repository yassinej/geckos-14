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
    const width = 700,
      height = 500;

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
      .style('stroke', d => {
        return 'red';
      })
      .attr('d', parentData => {
        return d3
          .line()
          .curve(d3.curveBasis) // make points round, not sharp
          .x(d => x(d.date))
          .y(d => y(d.value))(parentData.values);
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

    this._interval = setInterval(() => {
      this.transformData();
    }, 1000);

    this.processing();
  }

  componentDidUpdate() {
    this.processing();
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  processing() {
    const lineGenerator = d3.line();

    const line = this.chart.selectAll('path').data(() => [{ value: this.state.data }]);

    line
      .enter()
      .append('path')
      .merge(line)
      .attr('d', d => lineGenerator(d.value));

    line.exit().remove();
  }

  transformData() {
    let newData = [];
    for (let i = 0; i < this.state.data.length; i++) {
      newData.push({ date: parseTime('2018'), value: 200 });
    }
    this.setState({ data: newData });
  }

  render() {
    return <svg className="line-chart--base" ref={r => (this.chartRef = r)} />;
  }
}
