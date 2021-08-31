import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg';

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
      <p>{this.state.count}</p>
    <button onClick={this.handleClick}>like</button>
    </div>
    )
  }
}

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }
  // rather than creating constructor, attaching state obj to this, 
  // and binding this to helper methods


  render() {

    return (
      <div>
      <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Karol.</p>
        <p>I am a maker.</p>
        <p>This is very much under construction.</p>
        {
          this.state.displayBio ? (
            <div>
              <div>
              <p>Lalalala This is a long piece of text that is really meaningless but partly meant to test stuff and stuff soo o o o o i eiaiajdoj asoif af a f pdgopskgioewsjr asdggrer</p>
                <button onClick={this.toggleDisplayBio}>Read less</button>
              </div>
              <div>
                <Counter />
              </div>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
        <Projects />
        <hr />
        {/* <div>
          <button onClick =
        </div> */}
        {/*<div>
          <h2>Skills</h2>
          <p>I made this website using React. In addition to JavaScript, 
              I am proficient with C, C++, Java, and related languages.
              I enjoy programming with Arduino, and I love designing.</p>
        </div>*/}
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App;