import React from 'react';
import PropTypes from 'prop-types';
import LocalizationBox from './component/LocalizationBox';
import './App.css';

const App = props => (
  <div className="App"> <LocalizationBox {...props} /> </div>
);
App.propTypes = {
  items: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired).isRequired,
  locale: PropTypes.objectOf(PropTypes.shape({
    country: PropTypes.object,
  }).isRequired).isRequired,
};


export default App;
