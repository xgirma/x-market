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
	  const { length } = this.props.items;
	  return (
  <div>
    <form className="locale-form">
      <h4>Select Country</h4>
      <select
        onChange={this.handleCountryChange}
        id="countrySelect"
        name="country"
      >
        <option value="US">United States</option>
        <option value="GB">Great Britain</option>
        <option value="BE">Belgium</option>
      </select>
    </form>
    <h3>Your Cart ({length})</h3>
    <CartItemList {...this.state} onRemove={this.removeItem} onReset={this.resetItems} />
    <TotalBox {...this.state} />
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
