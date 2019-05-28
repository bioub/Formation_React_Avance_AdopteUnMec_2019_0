import { TODO_CHANGE, TODO_ADD, TODO_DELETE } from './constants';
import { randomInt } from '../utils/random';

function todoChange(payload) {
  return { type: TODO_CHANGE, payload };
}

function todoAdd(text) {
  return {
    type: TODO_ADD,
    payload: {
      id: randomInt(),
      text,
      completed: false,
    },
  };
}

function todoDelete(item) {
  return {
    type: TODO_DELETE,
    payload: item,
  };
}

export { todoChange, todoAdd, todoDelete };
