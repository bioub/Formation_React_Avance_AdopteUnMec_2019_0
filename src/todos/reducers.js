// @flow
import { TODO_CHANGE, TODO_ADD, TODO_DELETE } from './constants';
import { combineReducers } from 'redux';

interface FSAAction {
  type: string;
  payload?: any;
}

function inputReducer(previousState: string = '', { type, payload }: FSAAction) {
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
function itemsReducer(previousState = [], { type, payload }) {
  switch (type) {
    case TODO_ADD:
      return [...previousState, payload];
    case TODO_DELETE:
      const i = previousState.indexOf(payload);
      return [
        ...previousState.slice(0, i),
        ...previousState.slice(i + 1),
      ];
      // return previousState.filter((elt) => elt.id !== payload.id);
    default:
      return previousState;
  }
}

const todosReducer = combineReducers({
  input: inputReducer,
  items: itemsReducer,
});

export { inputReducer, itemsReducer, todosReducer };
