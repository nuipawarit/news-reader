import React from 'react';

import { shallow } from 'enzyme';

import Router from './index';

const defaultProps = {
  children: <div>Text</div>,
};

describe('<Router />', () => {
  it('should render without crashing', () => {
    const props = { ...defaultProps };

    const wrapper = shallow(<Router {...props} />);

    expect(wrapper).toBeDefined();
  });

  it('should render children', () => {
    const props = { ...defaultProps };
    const expected = { children: props.children };

    const wrapper = shallow(<Router {...props} />);

    expect(wrapper).toContainReact(expected.children);
  });
});
