import { userFetchRequested } from './actions';
import { getAll } from './api/users';

jest.mock('./api/users');

test('userFetchRequested action creator', async () => {
  getAll.mockClear();
  getAll.mockResolvedValue([{ id: 123, name: 'A' }, { id: 456, name: 'B' }]);

  const dispatch = jest.fn();
  const thunk = userFetchRequested();
  const state = {
    users: {
      items: []
    }
  };
  const getState = () => state;
  await thunk(dispatch, getState);

  expect(dispatch).toHaveBeenNthCalledWith(1, { type: 'USER_FETCH' });
  expect(dispatch).toHaveBeenNthCalledWith(2, {
    type: 'USER_FETCH_SUCCESS',
    payload: [{ id: 123, name: 'A' }, { id: 456, name: 'B' }],
  });
});
