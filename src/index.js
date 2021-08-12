import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { GifExpertApp } from './GifExpertApp';
/*
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
*/

const divRoot = document.getElementById('root');

ReactDOM.render(
  <GifExpertApp />,
  divRoot
);


