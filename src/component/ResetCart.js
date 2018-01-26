import React from 'react';
import PropTypes from 'prop-types';
import { itemsType } from '../types';
import { itemsDefault } from '../data/default';

function ResetCart(props) {
  const { onReset, items } = props;
  if (items.length < 3) {
  	return (
    <button
      onClick={() => onReset()}
    >
		  Reset your cart
    </button>
	  );
  }
  return (
    <div>
      {''}
    </div>
  );
}

export default ResetCart;

ResetCart.propTypes = {
  onReset: PropTypes.func.isRequired,
  items: itemsType,
};


ResetCart.defaultProps = {
  items: itemsDefault,
};

ResetCart.displayName = 'ResetCart';
