import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Application from '../src/App';
import Localization from '../src/component/Localization';
import CartItemList from '../src/component/CartItemList';
import Total from '../src/component/Total';
import { THREE, FOUR, ITEMS_DEFAULT, ITEM_TO_REMOVE } from './fixtures/items';
import { BE, LOCALE_DEFAULT } from './fixtures/locale';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Application />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Application', () => {
  let props;
  beforeEach(() => {
    props = {
      items: undefined,
      locale: undefined,
      translate: jest.fn(),
    };
  });

  it('should always render', () => {
	  const wrapper = shallow(<Application {...props} />);
	  expect(wrapper.find('div').length).toBeGreaterThan(0);
  });

  it('should have state with default value', () => {
  	const wrapper = shallow(<Application {...props} />);
	  expect(wrapper.state('items')).toEqual(ITEMS_DEFAULT);
	  expect(wrapper.state('locale')).toEqual(LOCALE_DEFAULT);
	  expect(wrapper.state('translate')).toEqual(expect.any(Function));
  });

  it('should set state', () => {
    const wrapper = shallow(<Application {...props} />);
    wrapper.setState({ items: FOUR });
    wrapper.setState({ locale: BE });
    expect(wrapper.state('items')).toEqual(FOUR);
    expect(wrapper.state('locale')).toEqual(BE);
  });

  it('should have title', () => {
	  const wrapper = shallow(<Application {...props} />);
	  expect(wrapper.find('h2').text()).toEqual('X Market');
  });

  it('should render child Localization', () => {
	  const wrapper = shallow(<Application {...props} />);
	  expect(wrapper.find(Localization)).toHaveLength(1);
	  expect(wrapper.find(Localization).dive().find('.locale-form')).toHaveLength(1);
	  expect(wrapper.props().children[1].props.translate).toEqual(expect.any(Function));
	  expect(wrapper.props().children[1].props.onLocaleChange).toEqual(expect.any(Function));
  });

  it('should render child CartItemList', () => {
    const wrapper = shallow(<Application {...props} />);
    expect(wrapper.find(CartItemList)).toHaveLength(1);
    expect(wrapper.find(CartItemList).dive().find('#item-lst')).toHaveLength(1);
    expect(wrapper.props().children[2].props.items).toHaveLength(2);
    expect(wrapper.props().children[2].props.locale).toEqual(LOCALE_DEFAULT);
    expect(wrapper.props().children[2].props.translate).toEqual(expect.any(Function));
    expect(wrapper.props().children[2].props.onRemove).toEqual(expect.any(Function));
  });

  it('should render child Total', () => {
    const wrapper = shallow(<Application {...props} />);
    expect(wrapper.find(Total)).toHaveLength(1);
    expect(wrapper.find(Total).dive().find('#total')).toHaveLength(1);
    expect(wrapper.props().children[3].props.items).toHaveLength(2);
    expect(wrapper.props().children[3].props.locale).toEqual(LOCALE_DEFAULT);
    expect(wrapper.props().children[3].props.translate).toEqual(expect.any(Function));
    expect(wrapper.props().children[3].props.onReset).toEqual(expect.any(Function));
  });

  it('handleLocale should set state', () => {
	  const wrapper = shallow(<Application {...props} />);
	  const instance = wrapper.instance();
	  const spy = jest.spyOn(instance, 'handleLocale');
	  wrapper.instance().handleLocale(BE);
	  expect(spy).toHaveBeenCalled();
	  expect(wrapper.state('locale')).toEqual(BE);
	  expect(wrapper.state('translate')).toEqual(expect.any(Function));
  });

  it('removeItem should set state', () => {
    const wrapper = shallow(<Application {...props} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'removeItem');
	  wrapper.setState({ items: FOUR });
	  expect(wrapper.state('items')).toEqual(FOUR);
    wrapper.instance().removeItem(ITEM_TO_REMOVE);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('items')).toEqual(THREE);
  });

  it('resetItems should set state', () => {
    const wrapper = shallow(<Application {...props} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'resetItems');
    wrapper.instance().resetItems();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('items')).toEqual(ITEMS_DEFAULT);
  });
});
