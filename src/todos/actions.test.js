import { todoChange, todoAdd, todoDelete } from './actions';
import { randomInt } from '../utils/random';

jest.mock('../utils/random');

describe('todos action creators', () => {

  it('todoChange actionCreator', () => {
    const action = todoChange('Acheter du pain');
    expect(action).toEqual({
      type: 'TODO_CHANGE',
      payload: 'Acheter du pain',
    });
  });

  describe('todoAdd actionCreator', () => {

    beforeEach(() => {
      randomInt.mockClear();
      randomInt.mockReturnValue(42);
    });

    it('todoChange actionCreator', () => {
      const action = todoAdd('Acheter du pain');
      expect(action).toEqual({
        type: 'TODO_ADD',
        payload: {
          id: 42,
          text: 'Acheter du pain',
          completed: false,
        }
      });
      expect(randomInt).toHaveBeenCalledTimes(1);
    });

  })

  it('todoDelete actionCreator', () => {
    const action = todoDelete({
      id: 123,
      text: 'Acheter du pain',
      completed: false,
    });
    expect(action).toEqual({
      type: 'TODO_DELETE',
      payload: {
        id: 123,
        text: 'Acheter du pain',
        completed: false,
      },
    });
  });
})
