import React from 'react';
import sum from '../lib/calculate-total';
import toLocaleCurrencyString from '../lib/conversion-helper';
import { itemsType, localeType } from '../types';
import { itemsDefault, localeDefault } from '../data/default';

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

export default TotalBox;

TotalBox.propTypes = {
  items: itemsType,
  locale: localeType,
};

TotalBox.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
};
