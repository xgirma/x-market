import React from 'react';
import { mount } from 'enzyme';

import ResetCart from '../../src/component/ResetCart';
import { none, three, four, empty } from '../fixtures/items';

describe('ResetCart', () => {
  let props;
  let mountResetCart;
  const resetCart = () => {
    if (!mountResetCart) {
      mountResetCart = mount(<ResetCart {...props} />);
    }
    return mountResetCart;
  };

  beforeEach(() => {
    props = {
      items: undefined,
      onReset: jest.fn(),
    };
    mountResetCart = undefined;
  });

  it('it always renders a single div', () => {
    const divs = resetCart().find('div');
    expect(divs.length).toEqual(1);
  });

  it('with default, which contains only two items, should render reset button', () => {
    const resetButton = resetCart().find('button');
    expect(resetButton.length).toEqual(1);
    expect(resetButton.text()).toEqual('Reset your cart');
  });

  it('with three items should not render reset button', () => {
    props.items = three;
    const resetButton = resetCart().find('button');
    expect(resetButton.length).toEqual(0);
  });

  it('with four items should not render reset button', () => {
    props.items = four;
    const resetButton = resetCart().find('button');
    expect(resetButton.length).toEqual(0);
  });

  it('with empty array it should render reset button', () => {
    props.items = none;
    const resetButton = resetCart().find('button');
    expect(resetButton.length).toEqual(1);
    expect(resetButton.text()).toEqual('Reset your cart');
  });

  it('with array of an empty object it should render reset button', () => {
    props.items = empty;
    const resetButton = resetCart().find('button');
    expect(resetButton.length).toEqual(1);
    expect(resetButton.text()).toEqual('Reset your cart');
  });
});
