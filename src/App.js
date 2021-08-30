import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  // rather than creating constructor, attaching state obj to this, 
  // and binding this to helper methods

  render() {

    var clicks = 0;

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
              <p>That counter down there doesn't even work...</p>
              <div>
                <button onClick={this.toggleDisplayBio}>like (actually more like Read Less)</button>
              </div>
              <div>
                {clicks}
                <p>clicks</p>
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