import React from 'react';
import PropTypes from 'prop-types';
import { itemType, localeType } from '../types';
import toLocaleCurrencyString from '../lib/conversion-helper';
import { itemsDefault, localeDefault } from '../data/default';

class CartItem extends React.Component {
	getLocalizedCurrencySymbol = (price, country) => toLocaleCurrencyString(price, country);

	render() {
	  const { name, price, description } = this.props.item;
	  const { country } = this.props.locale;
	  const { onRemove } = this.props;

	  return (
  <section>
    <h4>{name}</h4>
    <p>
							Your price: {' '}
      <span>{this.getLocalizedCurrencySymbol(price, country)}</span>
    </p>
    <p>{description}</p>
    <button onClick={() => onRemove(this.props.item)}>
							Remove this item from the cart
    </button>
  </section>
	  );
	}
}

export default CartItem;

CartItem.propTypes = {
  item: itemType,
  locale: localeType,
  onRemove: PropTypes.func.isRequired,
};

CartItem.defaultProps = {
  item: itemsDefault,
  locale: localeDefault,
};
