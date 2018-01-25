import React from 'react';
import LocalizationBox from './component/LocalizationBox';
import { itemsType, localeType } from './types';
import { itemsDefault, localeDefault } from './data/default';
import './App.css';

function App(props) {
  return <div className="App"> <LocalizationBox {...props} /> </div>;
}

export default App;

App.propTypes = {
  items: itemsType,
  locale: localeType,
};

App.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
};
