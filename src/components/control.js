import React, { Component } from 'react'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import DataBoxes from './data-boxes.js'
import library from '../data/years.js'

class Control extends Component {
  constructor() {
    super()
    this.state = {
      defaultValue: [0,1],
      min: 0,
      max: 75
    };
  }

  indices() {
    return this.state.value || this.state.defaultValue
  }

  formatYears(years) {
    return (
      years[0] + ' through ' + years[1]
    )
  }

  yearsRanges(indices) {
    return (
      [library[indices[0]]['year'], library[indices[1]]['year']]
    )
  }

  onSliderChange = (value) => {
    this.setState({
      value
    })
  }

  fillInYearsArray(yearsRange) {
    var start = parseInt(yearsRange[0], 10)
    var end = parseInt(yearsRange[1], 10)
    var output = []
    for (var i = (start); i <= end; i++) {
      output.push(i)
    }
    return output
  }

  slideMarks() {
    let marks = {}
    let years = this.fillInYearsArray(this.yearsRanges([0, 75]))
    for (var i = 1; i <= years.length; i++) {
      if (years[i] % 10 === 0) {
        marks[i.toString()] = {
          'label': years[i].toString(),
        }
      }
    }
    return marks
  }

  render() {
    return (
      <div>
        <div className='navbar navbar-default navbar-fixed-top'>
          <div className='main-title'>
            <h1>Mono Lake Timeline</h1>
          </div>
          <div className='years-range'>
            <h3>{this.formatYears(this.yearsRanges(this.indices()))}</h3>
          </div>
          <div className='slider'>
            <Range
              value={this.state.value}
              onChange={this.onSliderChange}
              onAfterChange={this.onAfterChange}
              max={this.state.max}
              min={this.state.min}
              defaultValue={this.state.defaultValue}
              marks={this.slideMarks()}
            />
          </div>
        </div>
        <div className='data-boxes'>
          <DataBoxes
            years={this.fillInYearsArray(this.yearsRanges(this.indices()))}
          />
        </div>
      </div>
    );
  }
};

export default Control;
