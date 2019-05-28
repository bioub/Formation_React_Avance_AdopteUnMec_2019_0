import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Todos } from './Todos';
import { configureStore } from '../../../configureStore';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <Todos />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders without crashing', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<Todos />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});

it('shallow renders without crashing (enzyme)', () => {
  shallow(<Todos />);
});
