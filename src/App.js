
import React from 'react';
import './App.css';
import {Land, Sea} from './Components/Buttons';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  increaseCount(value) {
    const newCount = value === 'Counter' ? this.state.count + 1 : this.state.count + 2;
    return newCount;
  }

  handleClick(e) {
    const value = e.target.className;
    this.setState({count: this.increaseCount(value)});
  }

  render() {
    return (
      <div className="App">
          <h2>{this.state.count}</h2>
          <Land onClick={this.handleClick} />
          <Sea onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
