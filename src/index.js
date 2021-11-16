import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import './index.css';

ReactDOM.render(
  <BrowserRouter history={createBrowserHistory()}>
    <Switch>
      <Route exact path='/' render={() => <Header><App /></Header>} />
      <Route path='/funny' render={() => <Header><Jokes /></Header>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);




  // about Promises:
  
// new Promise((resolve, reject) => {
//   return reject(new Error('No bears'));
  
//   setTimeout(() => {
//     resolve('Bears, Beets, Battlestar Galactica');
//   }, 2000);
// })
// .then(quote => {
//   console.log(quote);
// })
// .catch(error => console.log('error', error));

