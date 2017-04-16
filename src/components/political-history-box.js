import React, { Component } from 'react';
import politicalhistories from '../data/politicalhistories.js'
import library from '../data/years.js'

class PoliticalHistoryBox extends Component {
  formattedEntries() {
    var output = []
    var entries = this.entries()
    for (var i = 0; i < entries.length; i++) {
      output.push(<li key={i}>{politicalhistories[entries[i]]}</li>)
    }
    return output
  }

  isUniqueValue(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return false
      }
    }
    return true
  }

  entries() {
    let output = []
    let years = this.props.years
    for (var i = years[0] - 1941; i <= (years[years.length - 1] - 1941); i++) {
      let history = library[i]['politicalHistory']
      for (var j = 0; j < history.length; j++) {
        if (this.isUniqueValue(output, history[j])) {
          output.push(history[j])
        }
      }
    }
    return output
  }

  render() {
    if (this.entries().length > 0) {
      return (
        <div className='data-box'>
          <h4>Political History</h4>
        <div className='history-entries'>
          <ul>{this.formattedEntries()}</ul>
        </div>
        </div>
      )
    }
    return null
  }
};

export default PoliticalHistoryBox;
