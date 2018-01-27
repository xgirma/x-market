import React from 'react';
import PropTypes from 'prop-types';
import { itemsType } from '../types';
import { itemsDefault } from '../data/default';

function ResetCart(props) {
  const { onReset, items } = props;

  return (items.length < 3 ? (
    <div>
      <button id="reset=button" onClick={() => onReset()}>
	      Reset your cart
      </button>
    </div>) : (<div />)
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
