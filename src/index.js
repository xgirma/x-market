import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getInitialState from './initial-state';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App items={getInitialState()} locale={{ country: 'US' }} />,
  document.getElementById('root'),
);
registerServiceWorker();
