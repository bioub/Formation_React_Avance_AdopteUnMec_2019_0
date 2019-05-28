import {
  selectTodos,
  selectTodosInput,
  selectTodosItems,
  selectTodosCount,
} from './selectors';

test('selectTodos', () => {
  const state = {
    todos: {
      input: '',
      items: [],
    },
  };
  expect(selectTodos(state)).toBe(state.todos);
});

test('selectTodosInput', () => {
  const state = {
    todos: {
      input: '',
      items: [],
    },
  };
  expect(selectTodosInput(state)).toBe(state.todos.input);
});

test('selectTodosItems', () => {
  const state = {
    todos: {
      input: '',
      items: [],
    },
  };
  expect(selectTodosItems(state)).toBe(state.todos.items);
});

test('selectTodosCount', () => {
  const state = {
    todos: {
      input: '',
      items: [],
    },
  };
  expect(selectTodosCount(state)).toBe(0);
});
