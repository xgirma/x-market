import React from 'react';
import PropTypes from 'prop-types';
import { itemType, localeType } from '../types';
import toLocaleCurrencyString from '../lib/conversion-helper';
import { itemsDefault, localeDefault } from '../data/default';

class CartItem extends React.Component {
  getLocalizedCurrencySymbol = (price, country) => toLocaleCurrencyString(price, country);

  render() {
    const {
      name, price, description,
    } = this.props.item;
    const { country } = this.props.locale;
    const { onRemove } = this.props;
    return (
      <div className="Item">
        <div className="Details">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>
            <span>{this.getLocalizedCurrencySymbol(price, country)}</span>
          </p>

          <button onClick={() => onRemove(this.props.item)}>Remove
          </button>
        </div>
      </div>
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

CartItem.displayName = 'CartItem';
