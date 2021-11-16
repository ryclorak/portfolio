import React, { Component } from 'react';
import Counter from './Counter';
import Notes from './Notes';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)
const OtherJoke = ({ otherJoke: { setup, delivery } }) => (
  <p style={{ margin: 20 }}>{setup} <em>{delivery}</em></p>
)

class Jokes extends Component {
  state = { joke: {}, jokes: [], otherJoke: {} };

  // https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart
  // for asynchronous stuff, to not tie rendering component with slow requests
  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      // https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart
      .then(response => response.json())
      // same as .then(response => { return response.json() });
      .then(json => this.setState({ joke: json }))
      .catch(error => alert(error.message));
  }

  // https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10
  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      // https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }))
      .catch(error => alert(error.message));
  }

  fetchOtherJokes = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
      .then(response => response.json())
      .then(json => this.setState({ otherJoke: json }))
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want ten new jokes?</h3>
        <button onClick={this.fetchJokes}>Click me!</button>
        {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
        <hr />
        <h3>Those other jokes not working?</h3>
        <button onClick={this.fetchOtherJokes}>joke time</button>
        <OtherJoke otherJoke={this.state.otherJoke} />
        <hr />
        <h3>Want to write notes to yourself?</h3>
        <Notes />
        <hr />
        <h3>Smash that like button!</h3>
        <Counter />
      </div>
    )
  }
}

export default Jokes;