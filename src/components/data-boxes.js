import React, { Component } from 'react';
import WaterLevel from './water-level.js'
import WaterLevelContinuous from './water-level-continuous.js'
import PoliticalHistoryBox from './political-history-box.js'
import BirdCounts from './bird-counts.js'
import library from '../data/years.js'
import Dimensions from 'react-dimensions'

class DataBoxes extends Component {
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
      return (width / 2) - 20
    } else {
      return 360
    }
  }

  render() {
    return (
      <div className='data-boxes container'>
        <WaterLevel
          levels={this.levelsFor(this.props.years)}
          years={this.props.years}
          width={this.responsiveWidth()}
          height={300}/>
        <WaterLevelContinuous
          levels={this.levelsFor(this.props.years)}
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
      </div>
    );
  }
};

export default Dimensions()(DataBoxes);
