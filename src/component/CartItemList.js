import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import CartItem from './CartItem';
import { itemsType, localeType } from '../types';
import { itemsDefault, localeDefault } from '../data/default';

const CartItemList = (props) => {
  const { items, locale, onRemove } = props;
  return (
    <div>
      <div id="item-lst">
        {items.map(item => (
          <CartItem
            key={shortid.generate()}
            onRemove={() => onRemove(item)}
            locale={locale}
            item={item}
          />))}
      </div>
    </div>
  );
};

export default CartItemList;

CartItemList.propTypes = {
  items: itemsType,
  locale: localeType,
  onRemove: PropTypes.func.isRequired,
};

CartItemList.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
};

CartItemList.displayName = 'CartItemList';
