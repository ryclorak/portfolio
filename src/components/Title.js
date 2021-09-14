import React, { Component } from 'react';

const TITLES = [
  'a maker',
  'a developer',
  'a designer',
  'an artist',
  'a plant lover'
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 1500);

    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 1500);
    }, 3000);    //3 seconds
  }

  render() {
    const { fadeIn, titleIndex } = this.state;

    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
    )
  }
}

export default Title;