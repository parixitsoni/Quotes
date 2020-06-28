import React, { Component } from 'react';
import Quotes from './Component/randomQuote';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('constructor runs')
  }

  componentDidMount() {
    console.log('componentDidMount runs')
  }

  render() {
    console.log('render method runs')
    return (
      <div>
        <Quotes />
      </div>
    );
  }
}

export default App;
