import React from 'react';
import { shallow } from 'enzyme';
import LocalizationBox from '../../src/component/LocalizationBox';
import { LOCALE_DEFAULT } from '../fixtures/locale';
import { FOUR, NONE, ITEMS_DEFAULT } from '../fixtures/items';
import renderer from 'react-test-renderer';

describe('LocalizationBox', () => {
  let props;
  let renderLocalizationBox;
  const localizationBox = () => {
    if (!renderLocalizationBox) {
      renderLocalizationBox = shallow(<LocalizationBox {...props} />);
    }
    return renderLocalizationBox;
  };

  beforeEach(() => {
    props = {
      items: undefined,
      locale: undefined,
    };
    renderLocalizationBox = undefined;
  });

  it('should always renders a single div', () => {
    const wrapper = localizationBox().find('div');
    expect(wrapper).toHaveLength(1);
  });

  it('default: should have default state', () => {
    const wrapper = shallow(<LocalizationBox {...props} />);
    expect(wrapper.state().locale).toEqual(LOCALE_DEFAULT);
    expect(wrapper.state().items).toEqual(ITEMS_DEFAULT);
  });

  it('default: should have two items', () => {
    const message = localizationBox().find('#message');
    expect(message.text()).toEqual('Your cart has 2 items');
  });

  it('no item in the cart', () => {
    props.items = NONE;
    const message = localizationBox().find('#message');
    expect(message.text()).toEqual('Your cart is empty');
  });

  it('three item in the cart', () => {
    props.items = FOUR;
    const message = localizationBox().find('#message');
    expect(message.text()).toEqual('Your cart has 4 items');
  });
});

describe('LocalizationBox: snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<LocalizationBox
        items={[{}]}
        locale={{}}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
