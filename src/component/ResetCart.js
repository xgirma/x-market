import React from 'react';
import PropTypes from 'prop-types';
import { itemsType, translateType } from '../types';
import { itemsDefault, translateDefault } from '../data/default';

function ResetCart(props) {
  const { onReset, items, translate } = props;
  return (items.length < 3 ? (
    <div>
      <button id="reset=button" onClick={() => onReset()}>
        {translate('RESET')}
      </button>
    </div>) : (<div />)
  );
}

export default ResetCart;

ResetCart.propTypes = {
  onReset: PropTypes.func.isRequired,
  items: itemsType,
  translate: translateType,
};


ResetCart.defaultProps = {
  items: itemsDefault,
  translate: translateDefault,
};

ResetCart.displayName = 'ResetCart';
