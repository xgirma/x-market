import React from 'react';
import CartItemList from './CartItemList';
import TotalBox from './TotalBox';
import { itemsType, localeType } from '../types';
import { itemsDefault, localeDefault } from '../data/default';

class LocalizationBox extends React.Component {
state = {
  items: this.props.items,
  locale: this.props.locale,
};

handleCountryChange = ({ target: { value } }) => {
  this.setState({
    locale: { country: value },
  });
};

removeItem = (itemToRemove) => {
  this.setState({
    items: this.state.items.filter(item => item.id !== itemToRemove.id),
  });
};

resetItems = () => {
  this.setState({
    items: this.props.items, locale: this.props.locale,
  });
};

render() {
  const { length } = this.state.items;
  const closing = length === 1 ? 'item' : 'items';
  return (
    <div>
      <form className="locale-form">
        <h2>X Market</h2>
        <select
          onChange={this.handleCountryChange}
          id="countrySelect"
          name="country"
        >
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="BE">Belgium</option>
        </select>
      </form>
      <h3 id="message">Your Cart {length === 0 ? 'is empty' : (`has ${length} ${closing}`)}</h3>
      <CartItemList {...this.state} onRemove={this.removeItem} />
      <TotalBox {...this.state} onReset={this.resetItems} />
    </div>
  );
}
}

export default LocalizationBox;

LocalizationBox.propTypes = {
  items: itemsType,
  locale: localeType,
};

LocalizationBox.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
};

LocalizationBox.displayName = 'LocalizationBox';
