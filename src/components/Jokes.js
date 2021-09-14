import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  // for asynchronous stuff, to not tie rendering component with slow requests
  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      // https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart
      .then(response => response.json())
      // same as .then(response => { return response.json() });
      .then(json => this.setState({ joke: json }))
      .catch(error => alert(error.message));
  }

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      // https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }))
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
        <p><small>Made with joke API by <a href="https://github.com/15Dkatz/official_joke_api">David Katz</a></small></p>
      </div>
    )
  }
}

export default Jokes;