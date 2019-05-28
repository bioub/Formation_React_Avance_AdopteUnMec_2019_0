const { createStore } = require('redux');

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('state', store.getState());
});

store.dispatch({type: '@@INIT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
