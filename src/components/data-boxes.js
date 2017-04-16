import React from 'react';
import WaterLevel from './water-level.jsx'
import PoliticalHistoryBox from './political-history-box.jsx'
import WaterLevelContinuous from './water-level-continuous.jsx'
import BirdCounts from './bird-counts.jsx'
import library from '../data/years.jsx'
import { Component } from 'react';

class DataBoxes extends Component {
  levelsFor(years) {
    var output = []
    for (var i = 0; i <= (years[years.length - 1] - 1941); i++) {
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
