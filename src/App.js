import React, { Component } from 'react';
import { itemsType, localeType, translateType } from './types';
import { itemsDefault, localeDefault, translateDefault } from './data/default';
import LocalizationBox from './component/Localization';
import CartItemList from './component/CartItemList';
import TotalBox from './component/TotalBox';
import Translate from './lib/Translate';

class Application extends Component {
	state = {
	  items: this.props.items,
	  locale: this.props.locale,
	  translate: new Translate('US').translate,
	};

	handleLocale = (newLocale) => {
	  this.setState(state => ({ locale: newLocale }));
	  this.setState(state => ({ translate: new Translate(newLocale.country).translate }));
	};

	removeItem = (itemToRemove) => {
	  this.setState({
	    items: this.state.items.filter(item => item.id !== itemToRemove.id),
	  });
	};

	resetItems = () => {
	  this.setState({
	    items: this.props.items,
	  });
	};

	render() {
	  const { translate } = this.state;
	  return (
  <div className="App">
    <h2>X Market</h2>

    <LocalizationBox translate={translate} onLocaleChange={this.handleLocale} />
    <CartItemList {...this.state} onRemove={this.removeItem} />
    <TotalBox {...this.state} onReset={this.resetItems} />
  </div>);
	}
}

export default Application;

Application.propTypes = {
  items: itemsType,
  locale: localeType,
  translate: translateType,
};

Application.defaultProps = {
  items: itemsDefault,
  locale: localeDefault,
  translate: translateDefault,
};
