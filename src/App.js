import React, { Component } from 'react';
import { itemsType, localeType, translateType } from './types';
import { itemsDefault, localeDefault, translateDefault } from './data/default';
import Localization from './component/Localization';
import CartItemList from './component/CartItemList';
import Total from './component/TotalBox';
import Translate from './lib/Translate';

class Application extends Component {
	static displayName = 'App';

	static propTypes = {
	  items: itemsType,
	  locale: localeType,
	  translate: translateType,
	};

	static defaultProps = {
	  items: itemsDefault,
	  locale: localeDefault,
	  translate: translateDefault,
	};

	state = {
	  items: this.props.items,
	  locale: this.props.locale,
	  translate: new Translate('US').translate,
	};

	handleLocale = (newLocale) => {
	  // eslint-disable-next-line no-unused-vars
	  this.setState(state => ({ locale: newLocale }));
	  // eslint-disable-next-line no-unused-vars
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
	  return (
  <div className="App">
    <h2>X Market</h2>

    <Localization translate={this.state.translate} onLocaleChange={this.handleLocale} />
    <CartItemList {...this.state} onRemove={this.removeItem} />
    <Total {...this.state} onReset={this.resetItems} />
  </div>);
	}
}

export default Application;
