import renderer from 'react-test-renderer';
import React from 'react';
import { TodoItem } from './TodoItem';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const todo = {
    id: 123,
    text: 'Acheter du pain',
    completed: false,
  };
  const json = renderer.create(<TodoItem item={todo} />).toJSON();
  expect(json).toMatchSnapshot();
});

it('should contains span with todo.text', () => {
  const todo = {
    id: 123,
    text: 'Acheter du pain',
    completed: false,
  };
  const wrapper = shallow(<TodoItem item={todo} />);

  expect(wrapper.find('span').text()).toBe('Acheter du pain');
});

it('should call onDeleteItem on click', () => {
  const todo = {
    id: 123,
    text: 'Acheter du pain',
    completed: false,
  };
  const mock = jest.fn();
  const wrapper = shallow(<TodoItem item={todo} onDeleteItem={mock} />);

  wrapper.find('button').simulate('click');

  expect(mock).toHaveBeenNthCalledWith(1, todo);
});
