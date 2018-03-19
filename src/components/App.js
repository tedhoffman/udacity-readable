import React, { Component } from 'react'
import { fetchData } from '../utils/api'

class App extends Component {
	componentDidMount() {
		console.log(fetchData('categories', 'GET'))
	}

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Hello World</h1>
      </div>
    );
  }
}

export default App;
