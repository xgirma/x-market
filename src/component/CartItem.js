import React from 'react';
import PropTypes from 'prop-types';
import toLocaleCurrencyString from '../lib/conversion-helper';

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

CartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired).isRequired,
  locale: PropTypes.objectOf(PropTypes.shape({
    country: PropTypes.object,
  }).isRequired).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
