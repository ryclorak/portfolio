import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState((prevState, { count }) => ({
      count : prevState.count + 1
    }));
  };
  render () {
    return (
    <div>
      <br/>
      <button onClick={this.handleClick}>like</button>
      <p>{this.state.count}</p>
    </div>
    )
  }
}

export default Counter;