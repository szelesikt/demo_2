import React from 'react';
import './App.css';

const port = 4321;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
  }

  componentDidMount() {
    this.updateNumber();
  }

  render() {
    return (
        <div className="App">
          <div className="App-random-number">{this.state.number}</div>
          <div className="App-buttons">
            <button onClick={this.add}>+</button>
            <button onClick={this.subtract}>-</button>
            <button onClick={this.updateNumber}>Reroll</button>
          </div>
        </div>
    );
  }

  add() {
    if (this.state.number < 100) {
      this.setState({number: this.state.number + 1})
    }
  }

  subtract() {
    if (this.state.number > 0) {
      this.setState({number: this.state.number - 1})
    }
  }

  async updateNumber() {
    try {
      const raw = await fetch(`http://localhost:${port}/demo/getRandomNumber`);
      const json = await raw.json();
      this.setState({number: json.number})
    } catch (e) {
      console.error(e);
      this.setState({number: 0})
    }
  }

}

export default App;
