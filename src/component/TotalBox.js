import React from 'react';
import PropTypes from 'prop-types';
import sum from '../lib/calculate-total';
import toLocaleCurrencyString from '../lib/conversion-helper';
import { itemsType, localeType, translateType } from '../types';
import { itemsDefault, localeDefault, translateDefault } from '../data/default';
import ResetCart from './ResetCart';

class TotalBox extends React.Component {
  calculateTotalItemPrices = () => {
    const { items, locale } = this.props;
    const totalPrice = sum(items.map(item => item.price));
    return toLocaleCurrencyString(totalPrice, locale.country);
  };
  render() {
    return (
      <div>
        <ResetCart {...this.props} onReset={this.props.onReset} />
        <h2 id="total">
          {this.props.translate('TOTAL')}: {this.calculateTotalItemPrices()}
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
  translate: translateType,
};

TotalBox.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
  translate: translateDefault,
};

TotalBox.displayName = 'TotalBox';
