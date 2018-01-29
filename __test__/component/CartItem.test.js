import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CartItem from '../../src/component/CartItem';
import { ITEM_DEFAULT } from '../fixtures/items';
import { BE } from '../fixtures/locale';

describe('CartItem', () => {
  let props;
  let mountCartItem;
  const cartItem = () => {
    if (!mountCartItem) {
      mountCartItem = shallow(<CartItem {...props} />);
    }
    return mountCartItem;
  };

  beforeEach(() => {
    props = {
      item: {},
      locale: undefined,
      onRemove: jest.fn(),
    };
    mountCartItem = undefined;
  });


  it('should always renders a single div', () => {
    const wrapper = cartItem().find('.Item');
    expect(wrapper).toHaveLength(1);
  });

  it('should always renders a detail', () => {
    const item = cartItem().find('.Item');
    const title = cartItem().find('#name');
    const description = cartItem().find('#description');
    const price = cartItem().find('#price');
    const btnRemove = cartItem().find('#btnRemove');

    expect(item.length).toBeGreaterThan(0);
    expect(title.text()).toEqual('');
    expect(description.text()).toEqual('');
    expect(price.text()).toEqual('$ 0');
    expect(btnRemove).toHaveLength(1);
  });

  it('default: it should render three', () => {
    props.item = ITEM_DEFAULT;
    props.locale = BE;

    const details = cartItem().find('.Details');
    const title = cartItem().find('#name');
    const description = cartItem().find('#description');
    const price = cartItem().find('#price');
    const btnRemove = cartItem().find('#btnRemove');

    expect(details).toHaveLength(1);
    expect(title.text()).toEqual('');
    expect(description.text()).toEqual('');
    expect(price.text()).toEqual('€ 0');
    expect(btnRemove).toHaveLength(1);
  });

  it('should click', () => {

  });
});

describe('CartItem: snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<CartItem
        item={{}}
        locale={{}}
        onRemove={jest.fn()}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
