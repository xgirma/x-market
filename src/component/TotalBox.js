import React from 'react';
import PropTypes from 'prop-types';
import sum from '../lib/calculate-total';
import toLocaleCurrencyString from '../lib/conversion-helper';

class TotalBox extends React.Component {
	calculateTotalItemPrices = () => {
	  const { items, locale } = this.props;
	  const totalPrice = sum(items.map(item => item.price));
	  return toLocaleCurrencyString(totalPrice, locale.country);
	};

	render() {
	  return (
  <div>
    <h3>Your total: </h3>
    <h2>{this.calculateTotalItemPrices()}</h2>
  </div>
	  );
	}
}

TotalBox.propTypes = {
  items: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired).isRequired,
  locale: PropTypes.objectOf(PropTypes.shape({
    country: PropTypes.string,
  }).isRequired).isRequired,
};

export default TotalBox;
