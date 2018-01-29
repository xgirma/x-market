import React from 'react';
import { shallow } from 'enzyme';
import ResetCart from '../../src/component/ResetCart';
import { FOUR, THREE, NONE, EMPTY } from '../fixtures/items';
import renderer from 'react-test-renderer';

describe('ResetCart', () => {
  let props;
  let mountResetCart;
  const resetCart = () => {
    if (!mountResetCart) {
      mountResetCart = shallow(<ResetCart {...props} />);
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

  it('should always renders a single div', () => {
    const wrapper = resetCart().find('div');
    expect(wrapper).toHaveLength(1);
  });

  it('default: should render reset button', () => {
    const btnReset = resetCart().find('button');
    expect(btnReset).toHaveLength(1);
    expect(btnReset.text()).toEqual('Reset your cart');
  });

  it('three items should not render reset button', () => {
    props.items = THREE;
    const btnReset = resetCart().find('button');
    expect(btnReset).toHaveLength(0);
  });

  it('four items should not render reset button', () => {
    props.items = FOUR;
    const btnReset = resetCart().find('button');
    expect(btnReset).toHaveLength(0);
  });

  it('with [] it should render reset button', () => {
    props.items = NONE;
    const btnReset = resetCart().find('button');
    expect(btnReset).toHaveLength(1);
    expect(btnReset.text()).toEqual('Reset your cart');
  });

  it('with [{}] it should render reset button', () => {
    props.items = EMPTY;
    const btnReset = resetCart().find('button');
    expect(btnReset).toHaveLength(1);
    expect(btnReset.text()).toEqual('Reset your cart');
  });
});

describe('ResetCart: snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<ResetCart
        items={[{}]}
        onReset={jest.fn()}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
