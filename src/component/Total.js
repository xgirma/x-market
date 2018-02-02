import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sum from '../lib/calculate-total';
import toLocaleCurrencyString from '../lib/conversion-helper';
import ResetCart from './ResetCart';
import { itemsType, localeType, translateType } from '../types';
import { itemsDefault, localeDefault, translateDefault } from '../data/default';

class Total extends Component {
  static displayName = 'Total';

  static propTypes = {
	  items: itemsType,
	  locale: localeType,
	  onReset: PropTypes.func.isRequired,
	  translate: translateType,
  };

	static defaultProps = {
	  items: itemsDefault,
	  locale: localeDefault,
	  translate: translateDefault,
	};

  calculateTotalItemPrices = () => {
    const { items, locale } = this.props;
    const totalPrice = sum(items.map(item => item.price));
    return toLocaleCurrencyString(totalPrice, locale.country);
  };

  render() {
	  const { onReset, translate } = this.props;
    return (
      <div>
        <ResetCart {...this.props} onReset={onReset} />

        <h2 id="total">
          {translate('TOTAL')}: {this.calculateTotalItemPrices()}
        </h2>
      </div>
    );
  }
}

export default Total;
