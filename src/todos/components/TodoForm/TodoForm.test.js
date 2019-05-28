import React from 'react';
import { shallow } from 'enzyme';
import { TodoForm } from './TodoForm';

it('should fill input with newTodoInput prop', () => {
  const wrapper = shallow(<TodoForm newTodoInput="Acheter du pain" />);
  expect(wrapper.find('input').props().value).toBe('Acheter du pain');
});

it('should call onNewTodoChange on input change', () => {
  const cb = jest.fn();
  const wrapper = shallow(<TodoForm onNewTodoChange={cb} />);

  wrapper
    .find('input')
    .simulate('change', { target: { value: 'Acheter du pain' } });

  expect(cb).toHaveBeenNthCalledWith(1, 'Acheter du pain');
});

it('should call onNewTodoAdd on submit', () => {
  const cb = jest.fn();
  const wrapper = shallow(
    <TodoForm newTodoInput="Acheter du pain" onNewTodoAdd={cb} />,
  );

  const event = { preventDefault: jest.fn() };
  wrapper.find('form').simulate('submit', event);

  expect(cb).toHaveBeenNthCalledWith(1, 'Acheter du pain');
  expect(event.preventDefault).toHaveBeenCalledTimes(1);
});
