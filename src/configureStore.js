import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todosReducer } from './todos/reducers';
import { usersReducer } from './users/reducers';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
  form: formReducer,
});

export function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return store;
}
