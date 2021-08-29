import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const { link, image} = this.props.socialProfile;

    return (    ///one curly brace for style attr itself, one for inner obj
      <span>
        <a href={link}>
          <img src={image} alt='soc-prof' style={{ width: 35, height: 35, margin: 10}} />
        </a>    
      </span>    ///span instead of div to make them side by side
    )
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect 4!</h2>
        <div>
        {   ///curly braces for jsx
          SOCIAL_PROFILES.map(SOCIAL_PROFILE => {   ///map SOCIAL_PROFILES array
            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
          })
        }
        </div>
      </div>
    )
  }
}

export default SocialProfiles;