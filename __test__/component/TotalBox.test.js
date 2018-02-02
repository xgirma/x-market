import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Total from '../../src/component/Total';
import { THREE, FOUR } from '../fixtures/items';
import { US, SE, BE } from '../fixtures/locale';

describe('Total', () => {
  let props;
  let renderTotal;
  const totalBox = () => {
    if (!renderTotal) {
      renderTotal = shallow(<Total {...props} />);
    }
    return renderTotal;
  };

  beforeEach(() => {
    props = {
      items: undefined,
      locale: undefined,
      onReset: jest.fn(),
    };
    renderTotal = undefined;
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

describe('Total: snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Total
        items={[{}]}
        locale={{}}
        onReset={jest.fn()}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
