import React from 'react';

import { shallow } from 'enzyme';

import Routes from './index';

describe('<Routes />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Routes />);

    expect(wrapper).toBeDefined();
  });
});
