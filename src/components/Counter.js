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
      <p>{this.state.count}</p>
    <button onClick={this.handleClick}>like</button>
    </div>
    )
  }
}

export default Counter;