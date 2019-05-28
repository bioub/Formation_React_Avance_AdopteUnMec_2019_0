import { inputReducer, itemsReducer } from './reducers';

describe('inputReducer', () => {
  test('inputReducer initialState', () => {
    const previousState = undefined;
    const action = { type: '@@INIT' };
    const nextState = inputReducer(previousState, action);

    expect(nextState).toBe('');
    expect(nextState).not.toBe(previousState);
  });
  test('inputReducer nextState', () => {
    const previousState = 'Acheter du ';
    const action = { type: 'TODO_CHANGE', payload: 'Acheter du pain' };
    const nextState = inputReducer(previousState, action);

    expect(nextState).toBe('Acheter du pain');
    expect(nextState).not.toBe(previousState);
  });
  test('inputReducer nextState with unknow action', () => {
    const previousState = 'Acheter du ';
    const action = { type: 'UNKNOWN' };
    const nextState = inputReducer(previousState, action);

    expect(nextState).toBe(previousState);
  });
});

describe('itemsReducer', () => {
  test('itemsReducer initialState', () => {
    const previousState = undefined;
    const action = { type: '@@INIT' };
    const nextState = itemsReducer(previousState, action);

    expect(nextState).toEqual([]);
    expect(nextState).not.toBe(previousState);
  });
  test('itemsReducer nextState', () => {
    const previousState = [];
    const action = {
      type: 'TODO_ADD',
      payload: { id: 123, text: 'Acheter du pain', completed: false },
    };
    const nextState = itemsReducer(previousState, action);

    expect(nextState).toEqual([{ id: 123, text: 'Acheter du pain', completed: false }]);
    expect(nextState).not.toBe(previousState);
  });
  test('itemsReducer nextState', () => {
    const previousState = [{ id: 123, text: 'Acheter du pain', completed: false }];
    const action = {
      type: 'TODO_DELETE',
      payload: { id: 123, text: 'Acheter du pain', completed: false },
    };
    const nextState = itemsReducer(previousState, action);

    expect(nextState).toEqual([]);
    expect(nextState).not.toBe(previousState);
  });
  test('itemsReducer nextState with unknow action', () => {
    const previousState = [];
    const action = { type: 'UNKNOWN' };
    const nextState = itemsReducer(previousState, action);

    expect(nextState).toBe(previousState);
  });
});
