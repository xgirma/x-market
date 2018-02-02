import React from 'react';
import renderer from 'react-test-renderer';
import Localization from '../../src/component/Localization';

describe('Localization: snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Localization
        translate={() => {}}
        onLocaleChange={() => {}}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
