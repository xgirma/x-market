import React from 'react';
import PropTypes from 'prop-types';
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
	  const { onReset, items } = this.props;
	  return (
  <div>
    <div id="reset-btn">
      <button
        disabled={items.length >= 3}
        onClick={() => onReset()}
      >
						Reset your cart
      </button>
    </div>
    <h2>
      <span>Total: </span>
      <span>{this.calculateTotalItemPrices()}</span>
    </h2>
  </div>
	  );
	}
}

export default TotalBox;

TotalBox.propTypes = {
  items: itemsType,
  locale: localeType,
  onReset: PropTypes.func.isRequired,
};

TotalBox.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
};
