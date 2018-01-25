import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { itemsType, localeType } from '../types';
import { itemsDefault, localeDefault } from '../data/default';

const CartItemList = (props) => {
  const {
    items, locale, onRemove, onReset,
  } = props;
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

      <div id="reset-btn">
        <button onClick={() => onReset()}>
					Reset
        </button>
      </div>
    </div>
  );
};

export default CartItemList;

CartItemList.propTypes = {
  items: itemsType,
  locale: localeType,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

CartItemList.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
};
