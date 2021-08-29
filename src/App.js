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
        {
          this.state.displayBio ? (
            <div>
              <p>This is obviously very much under construction.</p>
              <p>That counter down there doesn't even work...</p>
              <p>Smash that like button!</p>
              <div>
                <button onClick={this.toggleDisplayBio}>like</button>
              </div>
              <div>
                <p>clicks</p>
                {clicks}
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
        <SocialProfiles />
      </div>
    )
  }
}

export default App;