import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { itemsType, localeType } from '../types';
import { itemsDefault, localeDefault } from '../data/default';

const CartItemList = (props) => {
  const { items, locale, onRemove } = props;
  return (
    <div>
      <div id="item-lst">
        {items.map(item => (<CartItem
          key={item.id}
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
