import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { items, locale } from './data/initial-state';
import registerServiceWorker from './registerServiceWorker';

const element = <App {...items} locale={locale} />;

ReactDOM.render(
  element,
  document.getElementById('root'),
);
registerServiceWorker();
