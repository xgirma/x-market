import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

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
  items: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired).isRequired,
  locale: PropTypes.objectOf(PropTypes.shape({
    country: PropTypes.string,
  }).isRequired).isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
