import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, AreaSeries} from 'react-vis';

const partialYears = [
  0.083,
  0.166,
  0.249,
  0.332,
  0.415,
  0.498,
  0.581,
  0.664,
  0.747,
  0.830,
  0.913,
  0.996
]

class WaterLevelContinuous extends Component {
  data() {
    const lines = this.props.levels
    let output = []
    let years = this.props.years
    for (var i = 0; i < years.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        if (lines[i][j]) {
          output.push({ "x": years[i] + partialYears[j], "y":  lines[i][j]})
        }
      }
    }
    return output
  }

  buildLineSeries() {
    var lineData = this.data()
    return(
      <AreaSeries
        color='#99ccff'
        data={lineData}
      />
    )
  }

  tickFormatter(tick) {
    return Math.floor(tick).toString()
  }

  tickNumber() {
    return Math.min(this.props.years.length, 10)
  }

  render() {
      return (
        <div className='data-box'>
          <h4>Water Level Continuous</h4>
          <XYPlot
            width={this.props.width}
            yDomain={[6371, 6420]}
            height={this.props.height}>
            <HorizontalGridLines />
            {this.buildLineSeries()}
            <XAxis
              tickFormat={this.tickFormatter}
              tickTotal={this.tickNumber()}
            />
            <YAxis title="feet"/>
          </XYPlot>
        </div>);
  }
}

export default WaterLevelContinuous;
