import React from 'react';

import { shallow } from 'enzyme';

import Theme from './index';

const defaultProps = {
  children: <div>Text</div>,
};

describe('<Theme />', () => {
  it('should render without crashing', () => {
    const props = { ...defaultProps };

    const wrapper = shallow(<Theme {...props} />);

    expect(wrapper).toBeDefined();
  });

  it('should render children', () => {
    const props = { ...defaultProps };
    const expected = { children: props.children };

    const wrapper = shallow(<Theme {...props} />);

    expect(wrapper).toContainReact(expected.children);
  });
});
