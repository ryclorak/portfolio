'use client'
import React, { useState } from 'react'
import Header from './Header'
import Title from './Title'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import Counter from './Counter'

const profileSrc = '/assets/profile.jpg'

export default function AppHome() {
  const [displayBio, setDisplayBio] = useState(false)
  return (
    <Header>
      <div>
        <img src={profileSrc} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Karol.</p>
        <p>This page is so outdated...</p>
        <Title />
        {displayBio ? (
          <div>
            <p>I strive for better living through technology. I am a software engineer with a plethora of interests, excited to explore ways to bring software to life. I have used Arduino and CAD software on a variety of projects, including a motion simulator, a campus wayfinder, an automatic phone tapper, and numerous 3d printed designs. During the first lockdown, I remotely led a team building a drone simulator using C# in Unity3D. I am honing my designing, prototyping, and testing skills with software, embedded systems, and so much 3d printing!</p>
            <button onClick={() => setDisplayBio(false)}>Read less</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setDisplayBio(true)}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <div>
          <small>Made from scratch by <a href="https://github.com/ryclorak/portfolio">me!</a></small>
        </div>
      </div>
    </Header>
  )
}
