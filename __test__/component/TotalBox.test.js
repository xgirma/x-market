import React from 'react';
import { shallow } from 'enzyme';
import TotalBox from '../../src/component/TotalBox';
import { THREE, FOUR } from '../fixtures/items';
import { US, SE, BE } from '../fixtures/locale';

describe('TotalBox', () => {
  let props;
  let mountTotalBox;
  const totalBox = () => {
    if (!mountTotalBox) {
      mountTotalBox = shallow(<TotalBox {...props} />);
    }
    return mountTotalBox;
  };

  beforeEach(() => {
    props = {
      items: undefined,
      locale: undefined,
      onReset: jest.fn(),
    };
    mountTotalBox = undefined;
  });

  it('should always renders a single div', () => {
    const wrapper = totalBox().find('div');
    expect(wrapper).toHaveLength(1);
  });

  it('default: should have total equals 0', () => {
    const wrapper = totalBox().find('div');
    expect(wrapper.find('#total').text()).toEqual('Total: $ 0');
  });

  it('default: should render reset button', () => {
    const btnReset = totalBox().find('ResetCart');
    expect(btnReset).toHaveLength(1);
  });

  it('Total should be $4797', () => {
    props.locale = US;
    props.items = THREE;
    const wrapper = totalBox().find('div');
    expect(wrapper.find('#total').text()).toEqual('Total: $ 4797');
  });

  it('Total should be kr44096', () => {
    props.locale = SE;
    props.items = FOUR;
    const wrapper = totalBox().find('div');
    expect(wrapper.find('#total').text()).toEqual('Total: kr 44096');
  });

  it('Total should be €3886', () => {
    props.locale = BE;
    props.items = THREE;
    const wrapper = totalBox().find('div');
    expect(wrapper.find('#total').text()).toEqual('Total: € 3886');
  });
});
