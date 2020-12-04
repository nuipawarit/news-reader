import React from 'react';

import { shallow } from 'enzyme';

import Providers from './index';

const defaultProps = {
  children: <div>Text</div>,
};

describe('<Providers />', () => {
  it('should render without crashing', () => {
    const props = { ...defaultProps };

    const wrapper = shallow(<Providers {...props} />);

    expect(wrapper).toBeDefined();
  });

  it('should render children', () => {
    const props = { ...defaultProps };
    const expected = { children: props.children };

    const wrapper = shallow(<Providers {...props} />);

    expect(wrapper).toContainReact(expected.children);
  });
});
