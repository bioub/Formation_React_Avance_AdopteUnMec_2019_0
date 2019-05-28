// @flow
import { TODO_CHANGE, TODO_ADD, TODO_DELETE } from './constants';
import { combineReducers } from 'redux';

interface FSAAction<T> {
  type: string;
  payload: T;
}

interface Todo {
  id?: number;
  text: string;
  completed?: boolean;
}


function inputReducer(previousState: string = '', { type, payload }: FSAAction<string>) {
  switch (type) {
    case TODO_CHANGE:
      return payload;
    default:
      return previousState;
  }
}

// Pure function
// - predictive
// - pas de side effect (pas de nouveau traitement storage/ajax...)
// - pas modifier les paramètres d'entrée
function itemsReducer(previousState: Todo[] = [], { type, payload }: FSAAction<Todo>): Todo[] {
  switch (type) {
    case TODO_ADD:
      return [...previousState, payload];
    case TODO_DELETE:
      // const i = previousState.indexOf(payload);
      // return [
      //   ...previousState.slice(0, i),
      //   ...previousState.slice(i + 1),
      // ];
      return previousState.filter((elt) => elt.id !== payload.id);
    default:
      return previousState;
  }
}

const todosReducer = combineReducers({
  input: inputReducer,
  items: itemsReducer,
});

export { inputReducer, itemsReducer, todosReducer };
