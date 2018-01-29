import React from 'react';
import { shallow } from 'enzyme';
import CartItemList from '../../src/component/CartItemList';
import renderer from 'react-test-renderer';

describe('CartItemList', () => {
  let props;
  let mountCartItemList;
  const cartItemList = () => {
    if (!mountCartItemList) {
      mountCartItemList = shallow(<CartItemList {...props} />);
    }
    return mountCartItemList;
  };

  beforeEach(() => {
    props = {
      items: undefined,
      locale: undefined,
      onRemove: jest.fn(),
    };
    mountCartItemList = undefined;
  });

  it('should always renders a two div', () => {
    const wrapper = cartItemList().find('div');
    expect(wrapper).toHaveLength(2);
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
