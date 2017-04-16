import React, { Component } from 'react'
import Control from './components/control'
import './styles/index.css'
import 'rc-slider/assets/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Control />
      </div>
    );
  }
}

export default App;
