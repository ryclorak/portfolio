import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Counter from './Counter';
import profile from '../assets/profile.jpg';

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
        <Title />
        {
          this.state.displayBio ? (
            <div>
              <div>
              <p>I strive for better living through technology. I am an aspiring robotics engineer, excited to further explore the interface between hardware and software. I have used Arduino and CAD software on a variety of projects, including a motion simulator, a campus wayfinder, an automatic phone tapper. During the first lockdown, I remotely led a team building a drone simulator using C# in Unity3D. My next learning journey involves TinyML so I can teach my projects how to learn and respond to me!</p>
                <button onClick={this.toggleDisplayBio}>Read less</button>
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
        {/* <hr /> */}
        <SocialProfiles />
        <hr />
        <div>
          <font size="1">Made from scratch by <a href="https://github.com/ryclorak/portfolio">me!</a></font>
        </div>
      </div>
    )
  }
}

export default App;