import React from 'react';
import LocalizationBox from './component/LocalizationBox';
import { itemsType, localeType } from './types';
import { itemsDefault, localeDefault } from './data/default';

function App({ items, locale }) {
  return <div className="App"> <LocalizationBox items={items} locale={locale} /> </div>;
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
