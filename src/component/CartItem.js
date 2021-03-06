import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toLocaleCurrencyString from '../lib/conversion-helper';
import { itemType, localeType, translateType } from '../types';
import { itemsDefault, localeDefault, translateDefault } from '../data/default';

class CartItem extends Component {
	static displayName = 'CartItem';

  static propTypes = {
	  item: itemType,
	  locale: localeType,
	  onRemove: PropTypes.func.isRequired,
	  translate: translateType,
  };

  static defaultProps = {
	  item: itemsDefault,
	  locale: localeDefault,
	  translate: translateDefault,
  };

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
            {this.getLocalizedCurrencySymbol(price, country)}
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
