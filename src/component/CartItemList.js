import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import CartItem from './CartItem';
import { itemsType, localeType, translateType } from '../types';
import { itemsDefault, localeDefault, translateDefault } from '../data/default';

// eslint-disable-next-line react/prefer-stateless-function
class CartItemList extends Component {
  static propTypes = {
	  items: itemsType,
	  locale: localeType,
	  onRemove: PropTypes.func.isRequired,
	  translate: translateType,
  };

  static defaultProps = {
	  items: itemsDefault,
	  locale: localeDefault,
	  translate: translateDefault,
  };

  static displayName = 'CartItemList';

  render() {
	  const {
      items, locale, onRemove, translate,
    } = this.props;
	  const { length } = this.props.items;
	  const closing = length === 1 ? `${translate('ITEM')}` : `${translate('ITEMS')}`;
    return (
      <div>
        <div>
          <h3 id="message">
            {translate('YOUR_CART')} {length === 0 ?
		        (`${translate('IS_EMPTY')}`) :
		        (`${translate('HAS')} ${length} ${closing}`)}
          </h3>
        </div>
        <div id="item-lst">
          {items.map(item => (
            <CartItem
              key={shortid.generate()}
              onRemove={() => onRemove(item)}
              locale={locale}
              item={item}
              translate={translate}
            />))}
        </div>
      </div>
    );
  }
}

export default CartItemList;
