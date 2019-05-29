import React from 'react';
import { TodoFormContainer } from '../../containers/TodoFormContainer';
import { TodoListContainer } from '../../containers/TodoListContainer';
import { HideableClock } from '../../../components/Clock/Clock';

export function Todos() {
  return (
    <div className="Todos">
      <TodoFormContainer />
      <TodoListContainer />

      <hr />
      <HideableClock />
    </div>
  );
}
