import React from 'react';
import PropTypes from 'prop-types';
import toLocaleCurrencyString from '../lib/conversion-helper';
import { itemType, localeType, translateType } from '../types';
import { itemsDefault, localeDefault, translateDefault } from '../data/default';

class CartItem extends React.Component {
  getLocalizedCurrencySymbol = (price, country) => toLocaleCurrencyString(price, country);

  render() {
    const { name, price, description } = this.props.item;
    const { country } = this.props.locale;
    const { onRemove, translate, item } = this.props;

    return (
      <div className="Item">
        <div className="Details">
          <h4 id="name">{name}</h4>
          <p id="description">{translate(description)}</p>
          <p id="price">
            <span>{this.getLocalizedCurrencySymbol(price, country)}</span>
          </p>
          <button
            id="btnRemove"
            onClick={() => onRemove(item)}
          >{translate('REMOVE')}
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
  translate: translateType,
};

CartItem.defaultProps = {
  item: itemsDefault,
  locale: localeDefault,
  translate: translateDefault,
};

CartItem.displayName = 'CartItem';
