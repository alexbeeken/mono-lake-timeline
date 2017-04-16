import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, HorizontalBarSeries } from 'react-vis';
import birds from '../data/birdcounts.js'
import colors from '../data/colors.js'

class BirdCounts extends Component {
  data() {
    const years = this.props.years
    let output = []
    for (var i = 0; i < years.length; i++) {
      if (years[i] === 1998 || years[i] === 1999 || years[i] === 2000) {
        output.push(this.buildBar(years[i], birds))
      }
    }
    return output
  }

  buildBar(year, birdsCount) {
    let output = []
    for (var i = 0; i < birdsCount.length; i++) {
      if (birdsCount[i]) {
        output.push(
          { "x": birdsCount[i]['COUNT'][year], "y": i, }
        )
      }
    }
    return output
  }

  tickFormatter(tick) {
    return birds[tick]['SPECIES']
  }

  buildBarSeries() {
    var output = []
    var barData = this.data()
    for (var i = 0; i < barData.length; i++) {
      output.push(
        <HorizontalBarSeries
          key={i}
          data={barData[i]}
          color={colors[i]}
        />
      )
    }
    return output
  }

  render() {
      const years = this.props.years
      const firstYear = years[0]
      const endYear = years[years.length - 1]
      if ((firstYear <= 1998 && endYear > 1997) ||
          (firstYear <= 1999 && endYear > 1998) ||
          (firstYear <= 2000 && endYear > 1999)) {
          return (
            <div className='data-box full'>
              <h4>Bird Counts</h4>
              <div className='birds'>
                <XYPlot
                  width={this.props.width - 30}
                  xDomain={[0, 2400]}
                  height={this.props.height}
                  onMouseEnter={this.active}
                  onMouseLeave={this.inactive}
                  animation={true}>
                  <HorizontalGridLines />
                  {this.buildBarSeries()}
                  <XAxis />
                  <YAxis title='species'
                    tickFormat={this.tickFormatter}
                    tickSizeOuter={0.5}
                    tickTotal={10}
                    tickLabelAngle={-45}/>
                </XYPlot>
              </div>
            </div>
          );
      }
      return null
  }
};

export default BirdCounts;
