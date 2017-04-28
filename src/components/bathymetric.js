import React, { Component } from 'react';
import levels from '../levels';
import ReactSVG from 'react-svg'

class Bathymetric extends Component {
  nearestLevel(smallLevel) {
    let level = smallLevel * 10
    let remainder = level % 10
    let result
    if (remainder >= 2.5 && remainder <= 7.5) {
      result += 5
    } else if (remainder >= 7.5) {
      result += 10
    }
    return result
  }

  svgForLevel(level) {
    let approxLevel = this.nearestLevel(level)
    return levels[approxLevel]
  }

  lowStyle() {
    return {
      width: this.props.width,
      height: 500,
      color: 'white'
    }
  }

  highStyle() {
    return {
      width: this.props.width,
      height: 500,
      color: 'green'
    }
  }

  render() {
    let low = this.nearestLevel(this.props.lowLevel)
    let high = this.nearestLevel(this.props.highLevel)
    if (high && low) {
      return (
        <div className='data-box full'>
          <ReactSVG
            path={low}
            style={this.lowStyle()}
          />
          <ReactSVG
            path={high}
            style={this.highStyle()}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default Bathymetric;
