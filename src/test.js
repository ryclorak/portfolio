import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  
  document.getElementById('test')
  );

render() {
  return (
    <div>
    <img src={profile} alt='profile' className='profile' />
    </div>
    )
};