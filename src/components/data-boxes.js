import React, { Component } from 'react';
import WaterLevel from './water-level.js'
import WaterLevelContinuous from './water-level-continuous.js'
import PoliticalHistoryBox from './political-history-box.js'
import BirdCounts from './bird-counts.js'
import Bathymetric from './bathymetric.js'
import library from '../data/years.js'
import Dimensions from 'react-dimensions'

class DataBoxes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      levels: this.levelsFor(props.years)
    }
  }

  componentWillReceiveProps(props) {
    this.setState((_prevState, props) => {
      return {levels: this.levelsFor(props.years)}
    })
  }

  levelsFor(years) {
    var output = []
    for (var i = years[0] - 1941; i <= (years[years.length - 1] - 1941); i++) {
      output.push(library[i]['levels'])
    }
    return output
  }

  responsiveWidth() {
    let width = this.props.containerWidth
    if (width > 720) {
      return (width / 2) - width/20
    } else {
      return 340
    }
  }

  allLevels() {
    return [].concat.apply([], this.state.levels)
  }

  lowLevel() {
    let array = this.allLevels().filter(Number)
    return Math.min.apply( Math, array )
  }

  highLevel() {
    return Math.max(...this.allLevels())
  }

  render() {
    return (
      <div className='data-boxes container'>
        <WaterLevel
          levels={this.state.levels}
          years={this.props.years}
          width={this.responsiveWidth()}
          height={300}/>
        <WaterLevelContinuous
          levels={this.state.levels}
          years={this.props.years}
          width={this.responsiveWidth()}
          height={300}/>
        <BirdCounts
          years={this.props.years}
          width={this.responsiveWidth()}
          height={300}/>
        <PoliticalHistoryBox
          years={this.props.years}
          width={this.responsiveWidth()}
          height={300}/>
        <Bathymetric
          lowLevel={this.lowLevel()}
          highLevel={this.highLevel()}
          width={this.responsiveWidth()}/>
      </div>
    )
  }
};

export default Dimensions()(DataBoxes);
