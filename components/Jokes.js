'use client'
import React, { useEffect, useState } from 'react'

const Joke = ({ joke }) => (
  <p style={{ margin: 20 }}>{joke.setup} <em>{joke.punchline}</em></p>
)

export default function Jokes() {
  const [joke, setJoke] = useState({})
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(r => r.json())
      .then(j => setJoke(j))
      .catch(e => console.error(e))
  }, [])

  const fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(r => r.json())
      .then(list => setJokes(list))
      .catch(e => console.error(e))
  }

  return (
    <div>
      <h2>Highlighted Joke</h2>
      <Joke joke={joke} />
      <hr />
      <h3>Want ten new jokes?</h3>
      <button onClick={fetchJokes}>Click me!</button>
      {jokes.map(j => (<Joke key={j.id} joke={j} />))}
    </div>
  )
}
