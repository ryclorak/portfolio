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
              <p>I strive for better living through technology. I am a software engineer with a plethora of interests, excited to explore ways to bring software to life. I have used Arduino and CAD software on a variety of projects, including a motion simulator, a campus wayfinder, an automatic phone tapper, and numerous 3d printed designs. During the first lockdown, I remotely led a team building a drone simulator using C# in Unity3D. I am honing my designing, prototyping, and testing skills with software, embedded systems, and so much 3d printing!</p>
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