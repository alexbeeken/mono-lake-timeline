import React, { Component } from 'react';
import WaterLevel from './water-level.js'
import WaterLevelContinuous from './water-level-continuous.js'
import PoliticalHistoryBox from './political-history-box.js'
import BirdCounts from './bird-counts.js'
import library from '../data/years.js'

class DataBoxes extends Component {
  levelsFor(years) {
    var output = []
    for (var i = years[0] - 1941; i <= (years[years.length - 1] - 1941); i++) {
      output.push(library[i]['levels'])
    }
    return output
  }

  render() {
    return (
      <div>
        <WaterLevel levels={this.levelsFor(this.props.years)} years={this.props.years}/>
        <WaterLevelContinuous levels={this.levelsFor(this.props.years)} years={this.props.years}/>
        <BirdCounts years={this.props.years}/>
        <PoliticalHistoryBox years={this.props.years}/>
      </div>
    );
  }
};

export default DataBoxes;
