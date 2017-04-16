import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineMarkSeries, LineSeries } from 'react-vis';
import colors from '../data/colors.js'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

class WaterLevel extends Component {
  data() {
    const lines = this.props.levels
    let output = []
    for (var i = 0; i < lines.length; i++) {
      output.push(this.buildLine(this.props.years[i], lines[i]))
    }
    return output
  }

  buildLine(year, level) {
    let output = []
    for (var i = 0; i < level.length; i++) {
      if (level[i]) {
        output.push(
          { "x": i, "y":  level[i]}
        )
      }
    }
    return output
  }

  color(year) {
    return colors[year % 1941]
  }

  buildLineSeries() {
    let output = []
    var lineData = this.data()
    for (var i = 0; i < lineData.length; i++) {
      if (lineData.length > 4) {
        output.push(
          <LineSeries
          key={i}
          color={this.color(this.props.years[i])}
          data={lineData[i]}
          />
        )
      } else {
        output.push(
          <LineMarkSeries
            key={i}
            color={this.color(this.props.years[i])}
            data={lineData[i]}
            strokeWidth={1}
          />
        )
      }
    }
    return output
  }

  tickFormatter(tick) {
    return months[tick]
  }

  render() {
      return (
        <div className='data-box'>
          <h4>Water Level by Month</h4>
           <XYPlot
              width={600}
              height={300}
              onMouseEnter={this.active}
              onMouseLeave={this.inactive}
              animation={true}>
              <HorizontalGridLines />
              {this.buildLineSeries()}
              <XAxis title="months" tickFormat={this.tickFormatter}/>
              <YAxis title="lake level"/>
            </XYPlot>
        </div>
      );
  }
};

export default WaterLevel;
