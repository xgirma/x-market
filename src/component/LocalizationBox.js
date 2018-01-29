import React from 'react';
import CartItemList from './CartItemList';
import TotalBox from './TotalBox';
import Translate from '../lib/Translate';
import {
  itemsType,
  localeType,
  translateType,
} from '../types';
import {
  itemsDefault,
  localeDefault,
  translateDefault,
} from '../data/default';

class LocalizationBox extends React.Component {
  state = {
    items: this.props.items,
    locale: this.props.locale,
    translate: new Translate('US').translate,
  };
  handleCountryChange = ({ target: { value } }) => {
    this.setState({
      locale: { country: value },
      translate: new Translate(value).translate,
    });
  };
  removeItem = (itemToRemove) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemToRemove.id),
    });
  };
  resetItems = () => {
    this.setState({
      items: this.props.items,
      locale: { country: this.localeSelector.value },
    });
  };
  render() {
    const { length } = this.state.items;
    const { translate } = this.state;
    const closing = length === 1 ? `${translate('ITEM')}` : `${translate('ITEMS')}`;
    return (
      <div>
        <form className="locale-form">
          <h2>X Market</h2>
          <select
            ref={(select) => { this.localeSelector = select; }}
            onChange={this.handleCountryChange}
            id="countrySelect"
            name="country"
          >
            <option value="US">{translate('UNITED_STATES')}</option>
            <option value="BE">{translate('BELGIUM')}</option>
            <option value="SE">{translate('SWEDEN')}</option>
          </select>
        </form>
        <h3 id="message">
          {translate('YOUR_CART')} {length === 0 ?
          (`${translate('IS_EMPTY')}`) :
          (`${translate('HAS')} ${length} ${closing}`)}
        </h3>
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
  translate: translateType,
};

LocalizationBox.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
  translate: translateDefault,
};

LocalizationBox.displayName = 'LocalizationBox';
