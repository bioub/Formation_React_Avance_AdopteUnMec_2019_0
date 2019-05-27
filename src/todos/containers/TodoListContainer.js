import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList/TodoList';
import { selectTodosItems, selectTodosCount } from '../selectors';

function mapStateToProps(state) {
  return {
    items: selectTodosItems(state),
    count: selectTodosCount(state),
  };
}

// mapDispatchToProps -> s'inspirer de TodoFormContainer
// créer la constante
// créer l'actionCreator
// modifier itemsReducer pour retourner un nouveau tableau sans
// l'item passé en payload (Array.prototype.filter)

export const TodoListContainer = connect(mapStateToProps)(TodoList);
