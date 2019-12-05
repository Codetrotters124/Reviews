import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Reviews from './reviews.jsx';

describe('Component Test with Enzyme', () => {
  it('renders without erros', () => {
    const wrapper = shallow(<Reviews />);
    const props = [{ review: 'jnjnsfnnoisn', data: 'today' }
    wrapper.setProps({ reviews: props });
    expect(wrapper.props()).toEqual();
  });

  it('should render', () => {
    const wrapper = render(<Reviews />);
    expect(wrapper);
  });
});