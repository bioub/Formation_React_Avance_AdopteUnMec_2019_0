import React from 'react';
import { shallow } from 'enzyme';
import { TodoCount } from './TodoCount';

it('should works with 0 todo', () => {
  const wrapper = shallow(<TodoCount count={0} />);
  expect(wrapper.find('.TodoCount').text()).toBe('0 todo remaining');
});

it('should works with 1 todo', () => {
  const wrapper = shallow(<TodoCount count={1} />);
  expect(wrapper.find('.TodoCount').text()).toBe('1 todo remaining');
});

it('should works with 2 todos', () => {
  const wrapper = shallow(<TodoCount count={2} />);
  expect(wrapper.find('.TodoCount').text()).toBe('2 todos remaining');
});
