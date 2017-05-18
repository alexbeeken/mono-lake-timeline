import React, { Component } from 'react';
import levels from '../levels';
import ReactSVG from 'react-svg'

const validLevel = level => (level >= 6359 && level <= 6385)

class Bathymetric extends Component {
  nearestLevel(smallLevel) {
    let level = smallLevel * 10
    let remainder = level % 10
    let result = level - remainder
    if (remainder >= 2.5 && remainder <= 7.5) {
      result = level + 5
    } else if (remainder >= 7.5) {
      result = level + 10
    }
    return result
  }

  validLevel(level) {
    return (level >= 6359 && level <= 6385)
  }

  lowStyle() {
    return {
      width: this.props.width,
      height: 500,
      color: 'black'
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
    if (validLevel(this.props.lowLevel) && validLevel(this.props.highLevel)) {
      let low = this.nearestLevel(this.props.lowLevel)
      console.log(low)
      if (low) {
        return (
          <div className='data-box'>
            <ReactSVG
              path={levels[low]}
              style={this.lowStyle()}
            />
          </div>
        )
      }
    }
    if (validLevel(this.props.highLevel)) {
      let high = this.nearestLevel(this.props.highLevel)
      console.log(high)
      if (high) {
        return (
          <div className='data-box'>
            <ReactSVG
              path={levels[high]}
              style={this.highStyle()}
            />
          </div>
        )
      }
    }
    return null
  }
}

export default Bathymetric;
