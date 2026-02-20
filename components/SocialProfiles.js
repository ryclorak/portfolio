'use client'
import SOCIAL_PROFILES from '../data/socialProfiles'

const SocialProfile = ({ socialProfile }) => {
  const { link, image } = socialProfile
  const src = image || 'https://via.placeholder.com/35'

  return (
    <span>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={src} alt="soc-prof" style={{ width: 35, height: 35, margin: 10 }} />
      </a>
    </span>
  )
}

export default function SocialProfiles() {
  return (
    <div>
      <h2>Connect with me!</h2>
      <div>
        {SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
          <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
        ))}
      </div>
    </div>
  )
}
