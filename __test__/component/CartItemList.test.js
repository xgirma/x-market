import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { FOUR, NONE } from '../fixtures/items';
import CartItemList from '../../src/component/CartItemList';

describe('CartItemList', () => {
  let props;
  let renderCartItemList;
  const cartItemList = () => {
    if (!renderCartItemList) {
      renderCartItemList = shallow(<CartItemList {...props} />);
    }
    return renderCartItemList;
  };

  beforeEach(() => {
    props = {
      items: undefined,
      locale: undefined,
      onRemove: jest.fn(),
    };
    renderCartItemList = undefined;
  });

  it('should always renders', () => {
    const wrapper = cartItemList().find('div');
    expect(wrapper.length).toBeGreaterThan(0);
  });

  it('default: should have two items', () => {
    const message = cartItemList().find('#message');
    expect(message.text()).toEqual('Your cart has 2 items');
  });

  it('no item in the cart', () => {
	  props.items = NONE;
	  const message = cartItemList().find('#message');
	  expect(message.text()).toEqual('Your cart is empty');
  });

  it('three item in the cart', () => {
	  props.items = FOUR;
	  const message = cartItemList().find('#message');
	  expect(message.text()).toEqual('Your cart has 4 items');
  });
});

describe('CartItemList: snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<CartItemList
        items={[{}]}
        locale={{}}
        onRemove={jest.fn()}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
